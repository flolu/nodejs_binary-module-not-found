import * as fs from 'fs'
import * as path from 'path'
import * as faker from 'faker'

const ruleDir = process.argv[2]

async function main() {
  const name = faker.name.firstName()
  await fs.promises.writeFile(path.join(ruleDir, 'random.txt'), name)
}

main()
