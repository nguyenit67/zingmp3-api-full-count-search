import { searchSongs } from ".";
import { search } from ".";

async function run() {
  // @ts-ignore
  const rs = await searchSongs("love");
  console.log(rs.data.items);
}

run();
