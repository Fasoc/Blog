const posts = [
    {
        id: 1,
        title: "O Futuro da Inteligência Artificial",
        excerpt: "A inteligência artificial está mudando o mundo de formas que nunca imaginamos...",
        date: "2024-10-01",
        image: "https://via.placeholder.com/300",
        category: "tecnologia",
        views: 0,
        content: "A inteligência artificial está mudando o mundo de formas que nunca imaginamos. Este post explora suas aplicações e futuras inovações."
    },
    {
        id: 2,
        title: "Descobrindo o Espaço",
        excerpt: "A exploração espacial continua a nos surpreender com novas descobertas...",
        date: "2024-09-25",
        image: "https://via.placeholder.com/300",
        category: "ciência",
        views: 0,
        content: "A exploração espacial continua a nos surpreender com novas descobertas. Vamos analisar os últimos avanços nesta área."
    },
    {
        id: 3,
        title: "Inovação e Sustentabilidade",
        excerpt: "Inovar para um mundo sustentável é o desafio do século XXI...",
        date: "2024-09-15",
        image: "https://via.placeholder.com/300",
        category: "inovação",
        views: 0,
        content: "Inovar para um mundo sustentável é o desafio do século XXI. Neste post, discutimos como a tecnologia pode ajudar."
    },
    {
        id: 4,
        title: "Programação para Iniciantes",
        excerpt: "Aprender a programar pode abrir muitas portas em sua carreira...",
        date: "2024-09-10",
        image: "https://via.placeholder.com/300",
        category: "programação",
        views: 0,
        content: "Aprender a programar pode abrir muitas portas em sua carreira. Aqui estão algumas dicas para iniciantes."
    }
];

function displayPosts(filterCategory) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
    const filteredPosts = filterCategory === 'all' ? posts : posts.filter(post => post.category === filterCategory);

    filteredPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h2>${post.title}</h2>
            <p>${post.excerpt}</p>
            <p>${post.date}</p>
            <p>Categoria: ${post.category}</p>
            <p>Views: ${post.views}</p>
        `;
        card.onclick = () => {
            window.location.href = `post.html?id=${post.id}`;
        };
        postsContainer.appendChild(card);
    });
}

document.getElementById('categoryFilter').addEventListener('change', (e) => {
    displayPosts(e.target.value);
});

displayPosts('all');

function displayPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = posts.find(p => p.id === postId);

    if (post) {
        document.getElementById('postContent').innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.date}</p>
            <p>${post.content}</p>
            <p><strong>Categoria:</strong> ${post.category}</p>
            <p><strong>Views:</strong> ${++post.views}</p>
        `;
    } else {
        document.getElementById('postContent').innerHTML = '<h2>Post não encontrado.</h2>';
    }
}

if (window.location.pathname.endsWith('post.html')) {
    displayPost();
}
