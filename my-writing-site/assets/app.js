fetch('data/posts.json')
  .then(res => res.json())
  .then(data => {
    const categories = {};
    data.forEach(post => {
      if (!categories[post.category]) categories[post.category] = [];
      categories[post.category].push(post);
    });

    const catList = document.getElementById('category-list');
    for (let cat in categories) {
      const catItem = document.createElement('li');
      catItem.textContent = `📂 ${cat}`;
      const postList = document.createElement('ul');

      categories[cat].forEach(post => {
        const postItem = document.createElement('li');
        postItem.textContent = post.title;
        postItem.onclick = () => {
          document.getElementById('post-content').innerHTML =
            `<h2>${post.title}</h2><p>${post.content.replace(/\n/g, "<br>")}</p>`;
        };
        postList.appendChild(postItem);
      });

      catItem.appendChild(postList);
      catList.appendChild(catItem);
    }
  });
