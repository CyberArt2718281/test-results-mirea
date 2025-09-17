export class RecentCounter {
    private requests: number[] = []

    ping(t: number): number {
        this.requests.push(t)
        const minTime = t - 3000
        while (this.requests.length > 0 && this.requests[0] < minTime) {
            this.requests.shift()
        }
        return this.requests.length
    }

    getRequests(): number[] {
        return [...this.requests]
    }

    reset(): void {
        this.requests = []
    }
}