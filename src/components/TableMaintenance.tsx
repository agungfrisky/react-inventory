import { useEffect, useState } from "react";

interface MaintenanceLog {
    id: number;
    date: string;
    description: string;
}

interface TableMaintenanceProps {
  itemId: number;
}

const TableMaintenance: React.FC<TableMaintenanceProps> = ({ itemId }) => {
  const [logs, setLogs] = useState<MaintenanceLog[]>([]);

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem("maintenanceLogs") || "{}");
    setLogs(storedLogs[itemId] || []);
  }, [itemId]);

  if (logs.length === 0) {
    return <p className="text-gray-500 font-medium">Log Kosong</p>;
  }

  return (
    <table className="table-auto border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Tanggal</th>
            <th className="border border-gray-300 px-4 py-2">Deskripsi</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2">{log.id}</td>
            <td className="border border-gray-300 px-4 py-2">{log.date}</td>
            <td className="border border-gray-300 px-4 py-2">{log.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableMaintenance;
