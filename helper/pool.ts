type Task = (...args: unknown[]) => Promise<void>

class Pool {
  queue: Task[] = []
  limit: number
  size = 0
  constructor(limit: number) {
    this.limit = limit
  }

  addTask(fn: Task) {
    this.queue.push(async () => {
      await fn()
      this.size -= 1
      this.exec()
    })
    this.exec()
  }

  async exec() {
    if (this.size > this.limit) return
    const cur = this.queue.shift()
    if (!cur) return
    this.size += 1
    cur()
  }
}

export default Pool
