// --- Day 2: Red-Nosed Reports ---

export const calculateSafeReports = (data: string): number => {
    const rows = data.trim().split('\n').map(row =>
        row.trim().split(/\s+/).map(Number)
    );
    let total = 0;

    rows.forEach(row => {
        let isIncreasing = true;
        let isDecreasing = true;
        let isWithinDifference = true;

        for (let index = 0; index < row.length - 1; index++) {
            const diff = row[index + 1] - row[index];

            if (Math.abs(diff) > 5 || diff === 0) {
                isWithinDifference = false;
            }

            if (diff < 0) {
                isIncreasing = false;
            } else if (diff > 0) {
                isDecreasing = false;
            }
        }

        if (isWithinDifference && (isIncreasing || isDecreasing)) {
            total++;
        }
    });

    return total;
};
