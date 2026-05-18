// Terminal-Lego Project Page

// Domain tag data
const domainData = {
  terminal: ['linux', 'bash', 'shell', 'command-line', 'terminal', 'unix', 'ubuntu', 'debian', 'centos', 'systemd', 'cron', 'sudo', 'chmod'],
  versioning: ['git', 'docker', 'kubernetes', 'virtualization', 'qemu'],
  networking: ['networking', 'tcp', 'http', 'https', 'dns', 'ssl', 'ssl-certificate', 'openssl', 'curl', 'wget', 'ssh', 'nginx', 'apache', 'iptables', 'firewall'],
  file: ['file-io', 'tar', 'gzip', 'zip', 'json', 'csv', 'regex', 'xml', 'string', 'sed', 'awk', 'grep', 'yaml', 'parquet'],
  python: ['python', 'pip', 'virtualenv', 'conda', 'pandas', 'numpy', 'matplotlib', 'jupyter-notebook', 'scipy', 'sympy'],
  ml: ['machine-learning', 'deep-learning', 'pytorch', 'tensorflow', 'keras', 'scikit-learn', 'nlp', 'huggingface-transformers'],
  database: ['sqlite', 'mysql', 'postgresql', 'redis', 'mongodb'],
  web: ['web-scraping', 'requests', 'beautifulsoup', 'selenium', 'api'],
  security: ['security', 'encryption', 'cryptography', 'hash'],
  debug: ['debugging', 'logging', 'exception'],
  algo: ['algorithm', 'sorting', 'recursion', 'data-structures', 'multiprocessing', 'multithreading', 'asyncio'],
  media: ['ffmpeg', 'opencv', 'image-processing', 'r'],
  build: ['makefile', 'cmake', 'gcc', 'vim', 'tmux']
};

function renderTags(tags) {
  const container = document.getElementById('domain-tag-list');
  container.innerHTML = tags.map(function(tag) {
    return '<span class="tag is-medium is-info is-light">' + tag + '</span>';
  }).join(' ');
}

function getAllTags() {
  var all = [];
  Object.keys(domainData).forEach(function(key) {
    all = all.concat(domainData[key]);
  });
  return all;
}

document.addEventListener('DOMContentLoaded', function() {
  // Domain button click handlers
  var buttons = document.querySelectorAll('.domain-btn');
  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      buttons.forEach(function(b) {
        b.classList.remove('is-active', 'is-dark');
        b.classList.add('is-outlined');
      });
      btn.classList.add('is-active', 'is-dark');
      btn.classList.remove('is-outlined');

      var domain = btn.getAttribute('data-domain');
      if (domain === 'all') {
        renderTags(getAllTags());
      } else {
        renderTags(domainData[domain]);
      }
    });
  });

  // Scroll fade-in animation
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
    if (!section.classList.contains('hero')) {
      section.classList.add('fade-in-section');
    }
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section').forEach(function(el) {
    observer.observe(el);
  });
});
