const graph = {
  'you': ['alice', 'bob', 'claire'],
  'bob': ['anuj', 'peggy'],
  'alice': ['peggy'],
  'claire': ['thom', 'jonny'],
  'anuj': [],
  'peggy': [],
  'thom': [],
  'jonny': [],
};

const personIsSeller = (name) => {
  // Mango seller
  return name[name.length - 1] === 'm';
}

function breadthFirstSearch(graph, name) {
  let search_queue = [...graph[name]];

  const searched = [];

  while (search_queue.length > 0) {
    const person = search_queue.shift();

    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller`);
        return true;
      } else {
        search_queue = [...search_queue, ...graph[person]];
        searched.push(person);
      }
    }
  }

  return false;
}

console.log(breadthFirstSearch(graph,'you'));
