import * as XLSX from 'xlsx';

export const exportToExcel = (counters) => {
  const data = counters.map(counter => ({
    'Nombre del Contador': counter.name,
    'Número de Contador': counter.count
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Counters');
  XLSX.writeFile(wb, 'CONTADOR EDT.xlsx');
};
