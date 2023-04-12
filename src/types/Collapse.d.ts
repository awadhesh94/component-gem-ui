export interface CollapseProps {
  title: string;
  description: string;
  className?: string;
  open: boolean;
  setOpen: (status: boolean) => void;
}
