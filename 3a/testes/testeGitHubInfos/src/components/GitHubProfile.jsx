import { useEffect, useState } from 'react';
import './GitHubProfile.css';

export default function GitHubProfile() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(userData)
  }, [userData])
    

  const fetchGitHubData = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);
    setRepos([]);

    try {
      const resUser = await fetch(`https://api.github.com/users/${username}`);
      if (!resUser.ok) throw new Error('Usuário não encontrado');
      const dataUser = await resUser.json();
      setUserData(dataUser);

      const resRepos = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
      const dataRepos = await resRepos.json();
      const topRepos = dataRepos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5);

      const detailedRepos = [];

      for (const repo of topRepos) {
        const langsRes = await fetch(repo.languages_url);
        const langs = await langsRes.json();

        const commitsRes = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`);
        const commits = await commitsRes.json();

        detailedRepos.push({
          id: repo.id,
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description,
          stargazers_count: repo.stargazers_count,
          languages: Object.keys(langs),
          lastCommit: commits[0]?.commit?.message || 'Sem commits encontrados'
        });
      }

      setRepos(detailedRepos);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Buscador de Usuários do GitHub</h1>
      <div style={{ display: 'flex', marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Digite o nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchGitHubData}>Buscar</button>
      </div>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div className="profile">
          <img src={userData.avatar_url} alt="avatar" />
          <h2>{userData.name || 'Sem nome público'}</h2>
          <p>@{userData.login}</p>
          {userData.bio && <p><em>{userData.bio}</em></p>}
          <p><strong>Localização:</strong> {userData.location || 'Não informada'}</p>
          <p><strong>Seguidores:</strong> {userData.followers} - <strong>Seguindo:</strong> {userData.following}</p>
          <p><strong>Repositórios Públicos:</strong> {userData.public_repos}</p>
          {userData.blog && (
            <p><strong>Blog:</strong> <a href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`} target="_blank" rel="noopener noreferrer">{userData.blog}</a></p>
          )}
        </div>
      )}

      {repos.length > 0 && (
        <div className="repo-list">
          <h3>Top Repositórios</h3>
          {repos.map(repo => (
            <div key={repo.id} className="repo">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
              <span>{repo.description || 'Sem descrição'}</span>
              <span>★ {repo.stargazers_count}</span>
              <span><strong>Último commit:</strong> {repo.lastCommit}</span>
              <span><strong>Linguagens:</strong> {repo.languages.length > 0 ? repo.languages.join(', ') : 'Nenhuma'}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


// com promises explicitas
// import { useState } from 'react';
// import './GitHubProfile.css';

// export default function GitHubProfile() {
//   const [username, setUsername] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [repos, setRepos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchGitHubData = async () => {
//     setLoading(true);
//     setError(null);
//     setUserData(null);
//     setRepos([]);

//     try {
//       const resUser = await fetch(`https://api.github.com/users/${username}`);
//       if (!resUser.ok) throw new Error('Usuário não encontrado');
//       const dataUser = await resUser.json();
//       setUserData(dataUser);

//       const resRepos = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
//       const dataRepos = await resRepos.json();

//       const detailedRepos = await Promise.all(
//         dataRepos
//           .sort((a, b) => b.stargazers_count - a.stargazers_count)
//           .slice(0, 5)
//           .map(async (repo) => {
//             const [langsRes, commitsRes] = await Promise.all([
//               fetch(repo.languages_url),
//               fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`)
//             ]);
//             const langs = await langsRes.json();
//             const commits = await commitsRes.json();

//             return {
//               id: repo.id,
//               name: repo.name,
//               html_url: repo.html_url,
//               description: repo.description,
//               stargazers_count: repo.stargazers_count,
//               languages: Object.keys(langs),
//               lastCommit: commits[0]?.commit?.message || 'Sem commits encontrados'
//             };
//           })
//       );

//       setRepos(detailedRepos);
//     } catch (err) {
//       setError(err.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="container">
//       <h1>Buscador de Usuários do GitHub</h1>
//       <div style={{ display: 'flex', marginBottom: '16px' }}>
//         <input
//           type="text"
//           placeholder="Digite o nome de usuário"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button onClick={fetchGitHubData}>Buscar</button>
//       </div>

//       {loading && <p>Carregando...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {userData && (
//         <div className="profile">
//           <img src={userData.avatar_url} alt="avatar" />
//           <h2>{userData.name || 'Sem nome público'}</h2>
//           <p>@{userData.login}</p>
//           {userData.bio && <p><em>{userData.bio}</em></p>}
//           <p><strong>Localização:</strong> {userData.location || 'Não informada'}</p>
//           <p><strong>Seguidores:</strong> {userData.followers} - <strong>Seguindo:</strong> {userData.following}</p>
//           <p><strong>Repositórios Públicos:</strong> {userData.public_repos}</p>
//           {userData.blog && (
//             <p><strong>Blog:</strong> <a href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`} target="_blank" rel="noopener noreferrer">{userData.blog}</a></p>
//           )}
//         </div>
//       )}

//       {repos.length > 0 && (
//         <div className="repo-list">
//           <h3>Top Repositórios</h3>
//           {repos.map(repo => (
//             <div key={repo.id} className="repo">
//               <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
//               <span>{repo.description || 'Sem descrição'}</span>
//               <span>★ {repo.stargazers_count}</span>
//               <span><strong>Último commit:</strong> {repo.lastCommit}</span>
//               <span><strong>Linguagens:</strong> {repo.languages.length > 0 ? repo.languages.join(', ') : 'Nenhuma'}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
