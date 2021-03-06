import { Row, Typography } from "antd";
import { memo, useState, useEffect } from "react";

import config from "../config";
import { formatOrders } from "../utils";
import OverdueSalesTable from "./OverdueSalesTable";
import SummaryInfo from "./SummaryInfo";

const OverdueSales = ({ style }: any) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch(`${config.apiUrl}/sales`, {
          method: "GET",
        });

        const body = await resp.json();

        if (!body?.orders?.length) {
          return setIsLoading(false);
        }

        setOrders(formatOrders(body.orders));
        setIsLoading(false);
      } catch (error) {
        console.error("--------query sales error", error);
        setIsLoading(false);
      }
    })();
  }, []);


  return (
    <Row style={style}>
      <Typography.Paragraph strong>Overdue Orders</Typography.Paragraph>
      <OverdueSalesTable isLoading={isLoading} orders={orders} />
      <SummaryInfo orders={orders} />
    </Row>
  );
};

export default memo(OverdueSales);
