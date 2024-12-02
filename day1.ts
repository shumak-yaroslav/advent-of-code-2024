// --- Day 1: Historian Hysteria ---

export const calculateDifference = (data: string): number => {
    const rows = data.trim().split('\n').map(row =>
        row.trim().split(/\s+/).map(Number)
    );

    const transpose = rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));

    const sortedColumns = transpose.map(column => column.sort((a, b) => a - b));

    return sortedColumns[0].reduce((total, element, index) =>
            total + Math.abs(element - sortedColumns[1][index])
        , 0);
};
