import React from "react";
import "./TabsTwo.css";

const TabsTwo = () => {
  return (
    <div>
      <table>
        <tr className="table-header">
          <th>Pax Type</th>
          <th>Base fare (BDT)</th>
          <th>Tax (BDT)</th>
          <th>Total (BDT)</th>
          <th>Pax Count</th>
          <th>Service Fee (BDT)</th>
          <th>Sub Total (BDT)</th>
        </tr>
        <tr>
          <td>Adult x1</td>
          <td>4090 Tk</td>
          <td>275 Tk</td>
          <td>4815 Tk</td>
          <td>1</td>
          <td>0 BDT</td>
          <td>4816</td>
        </tr>
        <tr>
          <td>Child x1</td>
          <td>4090 Tk</td>
          <td>275 Tk</td>
          <td>4815 Tk</td>
          <td>1</td>
          <td>0 BDT</td>
          <td>4816</td>
        </tr>
        <tr>
          <td>Infant x1</td>
          <td>4090 Tk</td>
          <td>275 Tk</td>
          <td>4815 Tk</td>
          <td>1</td>
          <td>0 BDT</td>
          <td>4816</td>
        </tr>
      </table>
    </div>
  );
};

export default TabsTwo;
