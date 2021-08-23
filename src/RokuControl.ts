import Roku from 'rokujs'

import { sleep } from './utils'

export class RokuControl {
  public roku: any

  public constructor(rokuIP: string) {
    this.roku = new Roku(rokuIP)
  }

  public async night() {
    this.roku.press('info')
    await sleep(500)
    this.roku.press('down')
    await sleep(250)
    this.roku.press('right')
    await sleep(250)

    for (let i = 0; i < 5; i++) {
      this.roku.press('down')
      await sleep(250)
    }

    this.roku.press('select')

    for (let i = 0; i < 2; i++) {
      this.roku.press('down')
      await sleep(250)
    }

    for (let i = 0; i < 100; i++) {
      this.roku.press('left')
    }

    this.roku.press('info')
    await sleep(1000)
  }

  public async day() {
    this.roku.press('info')
    await sleep(500)
    this.roku.press('down')
    await sleep(250)
    this.roku.press('left')
    await sleep(250)

    for (let i = 0; i < 5; i++) {
      this.roku.press('down')
      await sleep(250)
    }

    this.roku.press('select')

    for (let i = 0; i < 2; i++) {
      this.roku.press('down')
      await sleep(250)
    }

    for (let i = 0; i < 100; i++) {
      this.roku.press('right')
    }

    this.roku.press('info')
    await sleep(1000)
  }
}
