import React, { useEffect, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
}

declare global {
  interface Window {
    mermaid: any;
  }
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMermaidReady, setIsMermaidReady] = useState(false);

  useEffect(() => {
    // Check if mermaid is loaded
    if (window.mermaid) {
      try {
        window.mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            darkMode: true,
            background: 'transparent', 
            mainBkg: '#2d2e33',
            primaryColor: '#ff6d5a',
            primaryTextColor: '#fff',
            secondaryTextColor: '#ddd',
            lineColor: '#a78bfa',
            fontFamily: 'Fira Code',
            edgeLabelBackground: '#1e1e2e'
          },
          flowchart: {
            curve: 'basis', 
            htmlLabels: true,
            padding: 15,
            nodeSpacing: 40,
            rankSpacing: 60,
          },
          securityLevel: 'loose',
        });
        setIsMermaidReady(true);
      } catch (e) {
        console.error("Mermaid initialization failed", e);
      }
    } else {
      // Simple polling if script is async/deferred
      const interval = setInterval(() => {
        if (window.mermaid) {
          clearInterval(interval);
          try {
            window.mermaid.initialize({
                startOnLoad: false,
                theme: 'base',
                themeVariables: {
                    darkMode: true,
                    background: 'transparent',
                    mainBkg: '#2d2e33',
                    primaryColor: '#ff6d5a',
                    primaryTextColor: '#fff',
                    secondaryTextColor: '#ddd',
                    lineColor: '#a78bfa',
                    fontFamily: 'Fira Code',
                    edgeLabelBackground: '#1e1e2e'
                },
                flowchart: {
                    curve: 'basis',
                    htmlLabels: true,
                    padding: 15,
                    nodeSpacing: 40,
                    rankSpacing: 60,
                },
                securityLevel: 'loose',
            });
            setIsMermaidReady(true);
          } catch (e) {
            console.error("Mermaid initialization failed", e);
          }
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const renderChart = async () => {
      if (isMermaidReady && containerRef.current && window.mermaid) {
        // Clear previous content
        containerRef.current.innerHTML = '';
        
        // Unique ID for this render
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        
        try {
          // Mermaid v10+ render returns an object { svg }
          const { svg } = await window.mermaid.render(id, chart);
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
            
            // Adjust SVG to fit container nicely
            const svgElement = containerRef.current.querySelector('svg');
            if (svgElement) {
              svgElement.style.width = '100%';
              svgElement.style.maxWidth = '100%';
              svgElement.style.height = 'auto';
            }
          }
        } catch (error) {
          console.error('Mermaid render error:', error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `
              <div class="text-red-400 text-xs p-2 border border-red-500/20 rounded bg-red-900/10">
                Erro ao renderizar diagrama via Mermaid.
              </div>
            `;
          }
        }
      }
    };

    renderChart();
  }, [chart, isMermaidReady]);

  return (
    <div ref={containerRef} className="w-full h-full flex justify-center items-center overflow-auto p-4 mermaid-container" />
  );
};

export default MermaidDiagram;