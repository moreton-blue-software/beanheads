import { $, cd } from 'zx'

process.env.FORCE_COLOR = '1'

$.verbose = true

cd('core')

await $`pnpm build`

cd('../site')

await $`pnpm dev`
