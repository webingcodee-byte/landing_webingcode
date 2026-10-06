import { useState, useEffect, useMemo, useRef } from 'react';

// Tokenizer: convierte texto plano en tokens con tipo para colorearlos
const tokenize = (code) => {
  const tokens = [];
  let i = 0;
  while (i < code.length) {
    // Terminal output lines (> ...)
    if ((i === 0 || code[i - 1] === '\n') && code[i] === '>') {
      let end = code.indexOf('\n', i);
      if (end === -1) end = code.length;
      tokens.push({ type: 'terminal', value: code.slice(i, end) });
      i = end;
      continue;
    }
    // Strings
    if (code[i] === '"' || code[i] === "'") {
      const quote = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== quote && code[j] !== '\n') j++;
      if (j < code.length && code[j] === quote) j++;
      tokens.push({ type: 'string', value: code.slice(i, j) });
      i = j;
      continue;
    }
    // Words (identifiers / keywords)
    if (/[a-zA-ZÁ-ú_$]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-ZÁ-ú0-9_$]/.test(code[j])) j++;
      const word = code.slice(i, j);
      if (['const', 'new', 'let', 'var', 'function', 'return'].includes(word)) {
        tokens.push({ type: 'keyword', value: word });
      } else if (word === 'WebingCode') {
        tokens.push({ type: 'classname', value: word });
      } else if (word === 'init') {
        tokens.push({ type: 'method', value: word });
      } else if (i > 0 && code.slice(j).match(/^\s*:/) && !code.slice(j).match(/^\s*:\/\//)) {
        tokens.push({ type: 'property', value: word });
      } else {
        tokens.push({ type: 'plain', value: word });
      }
      i = j;
      continue;
    }
    // Default: single char
    tokens.push({ type: 'plain', value: code[i] });
    i++;
  }
  return tokens;
};

// Colores para cada tipo de token
const tokenColors = {
  keyword: { light: '#2563eb', dark: '#60a5fa' },
  string: { light: '#059669', dark: '#34d399' },
  property: { light: '#0891b2', dark: '#22d3ee' },
  classname: { light: '#d97706', dark: '#fbbf24' },
  method: { light: '#7c3aed', dark: '#a78bfa' },
  terminal: { light: '#6b7280', dark: '#9ca3af' },
};

const HighlightedCode = ({ code }) => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const tokens = useMemo(() => tokenize(code), [code]);
  const mode = isDark ? 'dark' : 'light';

  return (
    <>
      {tokens.map((token, i) => {
        const colorSet = tokenColors[token.type];
        if (colorSet) {
          return (
            <span key={i} style={{ color: colorSet[mode], fontWeight: token.type === 'keyword' ? 600 : 400 }}>
              {token.value}
            </span>
          );
        }
        return <span key={i}>{token.value}</span>;
      })}
    </>
  );
};

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = `const agency = new WebingCode();

agency.init({
  name: "WebingCode",
  type: "Agencia de Desarrollo",
  services: [
    "Páginas Web",
    "Sistemas de Gestión",
    "Apps Móviles"
  ],
  contact: "hola@webingcode.com",
  status: "Online 🟢"
});

> Compiling assets... [OK]
> Server running at http://localhost:3000
> Ready to build your project! 🚀`;

  const indexRef = useRef(0);
  const deletingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    indexRef.current = 0;
    deletingRef.current = false;

    const tick = () => {
      if (!deletingRef.current) {
        if (indexRef.current < fullText.length) {
          indexRef.current++;
          setText(fullText.substring(0, indexRef.current));
          timeoutRef.current = setTimeout(tick, 35);
        } else {
          deletingRef.current = true;
          timeoutRef.current = setTimeout(tick, 500);
        }
      } else {
        if (indexRef.current > 0) {
          indexRef.current--;
          setText(fullText.substring(0, indexRef.current));
          timeoutRef.current = setTimeout(tick, 35);
        } else {
          deletingRef.current = false;
          timeoutRef.current = setTimeout(tick, 200);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, 100);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center bg-bg-light relative overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan/10 to-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue/10 to-light-cyan/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-[fade-in-up_1s_ease-out]">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan/10 text-cyan font-semibold text-sm mb-6 border border-cyan/20">
            Agencia de Desarrollo Tecnológico
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
            Transformamos tus ideas en <span className="bg-gradient-to-r from-blue to-cyan bg-clip-text text-transparent">soluciones digitales</span>
          </h1>
          <p className="text-gray-text text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
            En WebingCode diseñamos y desarrollamos páginas web, aplicaciones, sistemas de gestión y software a medida que impulsan tu negocio al siguiente nivel.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contacto" className="bg-gradient-to-r from-blue to-cyan text-white px-8 py-3.5 rounded-full font-medium hover:shadow-xl hover:shadow-[#29B6B0]/30 transition-all hover:-translate-y-1 flex items-center gap-2">
              Cotizar proyecto
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            <a href="#proyectos" className="bg-card text-navy px-8 py-3.5 rounded-full font-medium border border-navy/20 hover:border-cyan hover:text-cyan transition-colors flex items-center justify-center">
              Ver portafolio
            </a>
          </div>


        </div>

        {/* Creative Code Terminal Animation */}
        <div className="relative animate-[fade-in_1.5s_ease-out] w-full max-w-lg mx-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue/30 to-cyan/30 rounded-2xl blur-xl transform rotate-3 scale-105"></div>

          <div className="relative bg-card transition-colors duration-500 rounded-2xl shadow-2xl border border-navy/10 w-full overflow-hidden flex flex-col h-[400px]">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-bg-section transition-colors duration-500 border-b border-navy/10">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              <span className="ml-auto text-gray-text text-xs font-mono tracking-wider">~/webingcode/init.js</span>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-sm md:text-base flex-1 overflow-hidden relative">
              <pre className="whitespace-pre-wrap leading-relaxed">
                <HighlightedCode code={text} />
                <span className="animate-pulse bg-cyan w-2.5 h-5 inline-block align-middle ml-0.5 shadow-[0_0_8px_#29B6B0]"></span>
              </pre>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
