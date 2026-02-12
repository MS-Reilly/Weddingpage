import { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableBody, TableRow, TableCell } from ".";

const meta: Meta<typeof Table> = {
  title: "Atoms/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Header 1</TableCell>
          <TableCell isHeader>Header 2</TableCell>
          <TableCell isHeader>Header 3</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 4</TableCell>
          <TableCell>Cell 5</TableCell>
          <TableCell>Cell 6</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
