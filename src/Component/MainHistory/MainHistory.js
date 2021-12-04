import React from "react";
import { Table } from "react-bootstrap";
import icon from "../../images/icon";
import "./MainHistory.css";

const historyTabledata = [
  {
    token: icon,
    estApy: "50%",
    duration: "30 days",
    stackingRewards: "0 SCT",
    action: ["Harvest", "Stack Now", "Unstake"],
  },
  {
    token: icon,
    estApy: "50%",
    duration: "30 days",
    stackingRewards: "0 SCT",
    action: ["Harvest", "Stack Now", "Unstake"],
  },
  {
    token: icon,
    estApy: "50%",
    duration: "30 days",
    stackingRewards: "0 SCT",
    action: ["Harvest", "Stack Now", "Unstake"],
  },
  {
    token: icon,
    estApy: "50%",
    duration: "30 days",
    stackingRewards: "0 SCT",
    action: ["Harvest", "Stack Now", "Unstake"],
  },
  {
    token: icon,
    estApy: "50%",
    duration: "30 days",
    stackingRewards: "0 SCT",
    action: ["Harvest", "Stack Now", "Unstake"],
  },
  {
    token: icon,
    estApy: "50%",
    duration: "30 days",
    stackingRewards: "0 SCT",
    action: ["Harvest", "Stack Now", "Unstake"],
  },
];

export default function MainHistory() {
  return (
    <div className="mt-5 ms-3">
        <div>
          <h4 className="text-white ms-4">History</h4>
            <Table className="table table-borderless table-condensed">
              <thead>
                <tr className="text-white">
                  <th>Tokens</th>
                  <th>Est. APY</th>
                  <th>Duration</th>
                  <th>Stacking Rewards</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {historyTabledata.map((item, index) => (
                  <tr className="text-white">
                    <td >
                      <div className="margin">
                        <img style={{ width: "2rem" }} src={item.token} alt="" />
                      </div>
                    </td>
                    <td>
                      <div className="margin">
                        {item.estApy}
                      </div>
                    </td>
                    <td>
                      <div className="margin">
                       {item.duration}
                      </div>
                    </td>
                    <td>
                      <div className="margin-last pe-5">
                      {item.stackingRewards}
                      </div>
                    </td>
                    <td>
                      <div className="">
                          <button
                          style={{ background: "#1F86FF" }}
                          className="btn me-5 text-white  history__btn"
                        >
                          Harvest
                        </button>

                        <button
                          style={{ background: "#403EAD" }}
                          className="btn me-5 text-white history__btn"
                        >
                          Stack Now
                        </button>

                        <button
                          style={{ background: "#FF5F5F" }}
                          className="btn text-white history__btn"
                        >
                          Unstake
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
        </div>
    </div>
  );
}
