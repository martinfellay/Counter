import React from 'react';
import { FaFileExport } from 'react-icons/fa';
import * as XLSX from 'xlsx';

const ExportButton = ({ counters }) => {
  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(
      counters.map(counter => ({ [counter.name]: counter.count }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Counters');
    XLSX.writeFile(wb, 'CONTADOR EDT.xlsx');
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-700 mt-4"
    >
      <FaFileExport />
      <span>Exportar</span>
    </button>
  );
};

export default ExportButton;
