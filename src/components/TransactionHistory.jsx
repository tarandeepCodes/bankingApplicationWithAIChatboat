import React from 'react';

export default function TransactionHistory({ transactions }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
      <ul className="max-h-40 overflow-y-auto space-y-2">
        {transactions.length === 0 ? (
          <li className="text-sm text-gray-400">No transactions yet.</li>
        ) : (
          transactions.map((tx) => (
            <li key={tx.id} className="text-sm flex justify-between border-b pb-1">
              <span>
                {tx.type === 'deposit' ? '⬆️' : '⬇️'} ₹{tx.amount} ({tx.type})
              </span>
              <span className="text-xs text-gray-400">{tx.date}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}