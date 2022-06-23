import { Order } from "../types/types";

const SummaryInfo = ({ orders = [], isLoading = false }: any) => {

    const totals = () => {
        let subTotal = 0;
        let taxTotal = 0;

        orders.forEach((order: Order) => {
            subTotal = +(subTotal + (+order.orderValue * +order.items)).toFixed(2);
            taxTotal = +(taxTotal + +order.taxes).toFixed(2);

        });
        let allTotal = subTotal + taxTotal;
        return { allTotal, subTotal, taxTotal };
    }
    if (isLoading) return <div>Loading...</div>

    return <div>
        <div>All Orders Sub Total: ${totals().subTotal}</div>
        <div>All Orders Tax Total: $ {totals().taxTotal}</div>
        <div>All Order Total: ${totals().allTotal}</div>
    </div>

};

export default SummaryInfo;