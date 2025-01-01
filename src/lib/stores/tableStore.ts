import { writable, derived, get } from 'svelte/store';

export function createTableStore<T extends Record<string, any>>(initialData: T[]) {
  const store = writable({
    data: initialData,
    currentPage: 1,
    pageSize: 10,
    sortColumn: 'timestamp',
    sortDirection: 'desc' as 'asc' | 'desc',
    searchQuery: '',
    statusFilter: 'all',
    dateRange: 'today',
    customDateRange: {
      start: null as Date | null,
      end: null as Date | null
    }
  });
  
  function setPage(page: number) {
    store.update(s => ({ ...s, currentPage: page }));
  }
  
  function setPageSize(size: number) {
    store.update(s => ({ ...s, pageSize: size, currentPage: 1 }));
  }
  
  function toggleSort(column: string) {
    store.update(s => ({
      ...s,
      sortColumn: column,
      sortDirection: s.sortColumn === column && s.sortDirection === 'asc' ? 'desc' : 'asc'
    }));
  }
  
  function setSearchQuery(query: string) {
    store.update(s => ({ ...s, searchQuery: query, currentPage: 1 }));
  }
  
  function setStatusFilter(status: string) {
    store.update(s => ({ ...s, statusFilter: status, currentPage: 1 }));
  }
  
  function setDateRange(range: string) {
    store.update(s => ({ ...s, dateRange: range, currentPage: 1 }));
  }
  
  function setCustomDateRange(start: Date, end: Date) {
    store.update(s => ({
      ...s,
      dateRange: 'custom',
      customDateRange: { start, end },
      currentPage: 1
    }));
  }
  
  const filtered = derived(store, ($store) => {
    let result = [...$store.data];
    
    // Apply search filter
    if ($store.searchQuery) {
      const query = $store.searchQuery.toLowerCase();
      result = result.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query)
      );
    }
    
    // Apply status filter
    if ($store.statusFilter !== 'all') {
      result = result.filter(item => item.status === $store.statusFilter);
    }
    
    // Apply date filter
    const now = new Date();
    let startDate: Date;
    
    if ($store.dateRange === 'custom' && $store.customDateRange.start && $store.customDateRange.end) {
      startDate = $store.customDateRange.start;
      const endDate = $store.customDateRange.end;
      result = result.filter(item => {
        const date = new Date(item.timestamp);
        return date >= startDate && date <= endDate;
      });
    } else {
      switch ($store.dateRange) {
        case 'today':
          startDate = new Date(now.setHours(0, 0, 0, 0));
          break;
        case '3days':
          startDate = new Date(now.setDate(now.getDate() - 3));
          break;
        case '5days':
          startDate = new Date(now.setDate(now.getDate() - 5));
          break;
        case '10days':
          startDate = new Date(now.setDate(now.getDate() - 10));
          break;
        default:
          startDate = new Date(0);
      }
      
      result = result.filter(item => new Date(item.timestamp) >= startDate);
    }
    
    // Apply sorting
    result.sort((a, b) => {
      const aVal = a[$store.sortColumn];
      const bVal = b[$store.sortColumn];
      const modifier = $store.sortDirection === 'asc' ? 1 : -1;
      
      if (typeof aVal === 'string') {
        return aVal.localeCompare(bVal) * modifier;
      }
      return (aVal - bVal) * modifier;
    });
    
    return result;
  });
  
  return {
    subscribe: store.subscribe,
    setPage,
    setPageSize,
    toggleSort,
    setSearchQuery,
    setStatusFilter,
    setDateRange,
    setCustomDateRange,
    getFilteredData: () => get(filtered),
    getPaginatedData: (data: T[]) => {
      const $store = get(store);
      const start = ($store.currentPage - 1) * $store.pageSize;
      const end = start + $store.pageSize;
      return data.slice(start, end);
    }
  };
}

export type TableStore = ReturnType<typeof createTableStore>;