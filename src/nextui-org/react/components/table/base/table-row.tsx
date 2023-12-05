import {HTMLYooUIProps} from "@nextui-org/core/system";
import {Row} from "@react-stately/table";
import {RowProps} from "@react-types/table";

export type TableRowProps<T = object> = RowProps<T> &
  Omit<HTMLYooUIProps<"tr">, keyof RowProps<T>>;

const TableRow = Row as (props: TableRowProps) => JSX.Element;

export default TableRow;
