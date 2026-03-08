import DatePicker from "@react-native-community/datetimepicker";
import { Control } from "react-hook-form";

interface LabelDateProps {
  value: Date;
  control:Control
}

export function LabelDate() {
  return <DatePicker />;
}
