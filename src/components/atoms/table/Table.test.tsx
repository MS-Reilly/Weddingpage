import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Table, TableHeader, TableBody, TableRow, TableCell } from ".";

describe("Table Components", () => {
  it("renders a basic table structure correctly", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Header</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByRole("rowgroup")).toBeInTheDocument();
    expect(screen.getByRole("row")).toBeInTheDocument();
    expect(screen.getByRole("columnheader")).toHaveTextContent("Header");
    expect(screen.getByRole("cell")).toHaveTextContent("Content");
  });

  it("applies custom classNames correctly", () => {
    const customClass = "custom-class";
    render(
      <Table className={customClass}>
        <TableHeader className={customClass}>
          <TableRow className={customClass}>
            <TableCell isHeader className={customClass}>
              Header
            </TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    );

    expect(screen.getByRole("table")).toHaveClass(customClass);
    expect(screen.getByRole("rowgroup")).toHaveClass(customClass);
    expect(screen.getByRole("row")).toHaveClass(customClass);
    expect(screen.getByRole("columnheader")).toHaveClass(customClass);
  });
});
