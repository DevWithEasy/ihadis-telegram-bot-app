import React from "react";

export default function Tr({heading, title}) {
  return (
    <tr className="border">
      <td className="px-2 py-1 border-r">{heading}</td>
      <td className="pl-2 pr-6 py-1">{title}</td>
    </tr>
  );
}
