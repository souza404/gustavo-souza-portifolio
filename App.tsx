import React, { useState, useRef, useEffect } from 'react';
import {
  Workflow,
  Terminal,
  Database,
  Cpu,
  Linkedin,
  Github,
  Mail,
  ChevronDown,
  Code2,
  BrainCircuit,
  Zap,
  X,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  MessageSquare,
  Globe,
  Mic,
  Calendar,
  Image as ImageIcon,
  Play,
  Clock,
  Layers,
  Maximize2,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Bot,
  Download,
  Briefcase,
  MapPin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Project, Experience } from './types';

// --- VISUALIZATIONS ---

// Specialized Visual for the Aesthetic Bot (Chat Demo)


const AestheticBotVisual = () => (
  <div className="w-full h-full flex flex-col bg-[#050505] rounded-xl overflow-hidden relative font-sans select-none">
    {/* Header */}
    <div className="bg-[#111] px-4 py-3 border-b border-white/5 flex items-center justify-between z-10">
      <div className="flex items-center gap-3">
        {/* --- FOTO DE PERFIL NO HEADER --- */}
        {/* Substituí o ícone do BrainCircuit pela imagem */}
        <img
          src="/luana.png"
          alt="Luana"
          className="w-8 h-8 rounded-full object-cover shadow-lg shadow-rose-500/20 border border-white/10"
        />
        {/* -------------------------------- */}
        <div>
          <h3 className="text-white text-xs font-bold">Luana - Nova Aura</h3>
          <p className="text-emerald-400 text-[9px] font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Online • Uazapi
          </p>
        </div>
      </div>
      <div className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
        <Play className="w-2.5 h-2.5 text-gray-400 fill-current" />
      </div>
    </div>

    {/* Chat Area */}
    <div className="flex-1 p-4 space-y-6 overflow-y-auto relative custom-scrollbar">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:12px_12px] opacity-100 pointer-events-none"></div>

      {/* --- MENSAGEM 1: USUÁRIO (Áudio) --- */}
      <div className="flex justify-end relative z-10">
        <div className="bg-[#2a1b3d] border border-purple-500/20 rounded-2xl rounded-tr-sm p-3 max-w-[85%] shadow-sm group">
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
              <Mic className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="h-6 flex-1 flex items-center gap-0.5 justify-end">
              {[3, 6, 2, 5, 8, 4, 6, 3, 7, 4, 2, 5, 8, 6, 3, 7, 3, 4].map((h, i) => (
                <div key={i} className="w-0.5 bg-purple-400 rounded-full" style={{ height: `${h * 2}px` }}></div>
              ))}
            </div>
            <span className="text-[9px] text-purple-300/70 ml-1 font-mono">0:06</span>
          </div>
          <p className="text-[10px] text-gray-400 italic mt-2 pt-2 border-t border-white/5 leading-relaxed">
            "Gostaria de agendar um clareamento, vocês realizam o procedimento?"
          </p>
        </div>
      </div>

      {/* --- MENSAGEM 2: LUANA (Texto + Imagem) --- */}
      <div className="flex gap-3 relative z-10">
        {/* --- AVATAR DA LUANA NAS MENSAGENS --- */}
        <img
          src="/luana.png"
          alt="Luana"
          className="w-7 h-7 rounded-full object-cover shadow-lg shadow-rose-900/20 border border-white/10 shrink-0 mt-1"
        />
        {/* ------------------------------------- */}
        <div className="flex flex-col gap-2 max-w-[85%]">
          <div className="bg-[#1a1a1a] border border-white/5 rounded-xl rounded-tl-sm p-3 shadow-md">
            {/* Imagem do Procedimento */}
            <img
              src="https://mwfqqieswjcitvqwbovg.supabase.co/storage/v1/object/public/poc_clinicas/ClareamentoDental.png"
              alt="Clareamento"
              className="w-full h-24 rounded-lg mb-2.5 object-cover border border-white/10 brightness-90"
            />
            <p className="text-[10px] text-gray-300 leading-relaxed">
              Olá! Ficamos felizes com seu interesse. Realizamos clareamento dental com técnicas avançadas (Laser e Gel). <br /><br />
              Para agendar, preciso verificar nossa disponibilidade. Qual dia fica melhor para você?
            </p>
          </div>
        </div>
      </div>

      {/* --- MENSAGEM 3: USUÁRIO (Texto - Escolhendo Dia) --- */}
      <div className="flex justify-end relative z-10">
        <div className="bg-[#2a1b3d] border border-purple-500/20 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] shadow-sm">
          <p className="text-[11px] text-gray-200">
            Tem horário para esta <strong>sexta-feira</strong>?
          </p>
          <div className="text-[8px] text-purple-300/50 text-right mt-1">10:42</div>
        </div>
      </div>

      {/* --- MENSAGEM 4: LUANA (Opções de Horário) --- */}
      <div className="flex gap-3 relative z-10">
        {/* --- AVATAR DA LUANA NAS MENSAGENS --- */}
        <img
          src="/luana.png"
          alt="Luana"
          className="w-7 h-7 rounded-full object-cover shadow-lg shadow-rose-900/20 border border-white/10 shrink-0 mt-1"
        />
        {/* ------------------------------------- */}
        <div className="bg-[#1a1a1a] border border-white/5 rounded-xl rounded-tl-sm p-3 shadow-md max-w-[85%]">
          <p className="text-[10px] text-gray-300 leading-relaxed mb-3">
            Perfeito! Para sexta-feira (26/10), encontrei estes horários livres com a Dra. Sofia:
          </p>

          {/* Chips de Horário */}
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 text-[10px] hover:bg-white/10 transition-colors">
              09:00
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-rose-500/50 bg-rose-500/10 text-rose-300 text-[10px] font-medium shadow-[0_0_10px_rgba(244,63,94,0.1)]">
              14:00
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 text-[10px] hover:bg-white/10 transition-colors">
              16:30
            </button>
          </div>
        </div>
      </div>

      {/* --- MENSAGEM 5: USUÁRIO (Confirmação Horário) --- */}
      <div className="flex justify-end relative z-10">
        <div className="bg-[#2a1b3d] border border-purple-500/20 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] shadow-sm">
          <p className="text-[11px] text-gray-200">
            Pode ser às <strong>14:00</strong> então.
          </p>
        </div>
      </div>

      {/* --- MENSAGEM 6: LUANA (Ticket de Confirmação Final) --- */}
      <div className="flex gap-3 relative z-10 pb-4">
        {/* --- AVATAR DA LUANA NAS MENSAGENS --- */}
        <img
          src="/luana.png"
          alt="Luana"
          className="w-7 h-7 rounded-full object-cover shadow-lg shadow-rose-900/20 border border-white/10 shrink-0 mt-1"
        />
        {/* ------------------------------------- */}

        <div className="flex flex-col gap-2 max-w-[85%]">
          {/* Balão de Texto */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-xl rounded-tl-sm p-3 shadow-md">
            <p className="text-[10px] text-gray-300 leading-relaxed">
              Agendado! ✨ Enviei a confirmação abaixo. Te esperamos na sexta!
            </p>
          </div>

          {/* Ticket de Agendamento */}
          <div className="relative overflow-hidden rounded-xl bg-[#111] border border-emerald-500/30 w-full group">
            {/* Faixa decorativa lateral */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>

            <div className="p-3 pl-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-gray-200">Clareamento Dental</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] text-gray-400 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> Sex, 14:00
                    </span>
                    <span className="w-0.5 h-2 bg-gray-700"></span>
                    <span className="text-[9px] text-gray-400">Dra. Sofia</span>
                  </div>
                </div>
              </div>

              <div className="w-6 h-6 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Rodapé do Ticket */}
            <div className="bg-[#151515] px-3 py-1.5 flex items-center justify-between border-t border-white/5">
              <span className="text-[8px] text-emerald-500/80 font-mono uppercase tracking-wider">Confirmado</span>
              <div className="flex items-center gap-1 text-[8px] text-gray-500 cursor-pointer hover:text-white transition-colors">
                Ver detalhes <ChevronRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);


// New Component: Workflow Gallery
const WorkflowGallery = ({ workflows }: { workflows: NonNullable<Project['workflows']> }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      {workflows.map((flow, index) => (
        <motion.div
          key={index}
          className="group relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Index & Title Column */}
            <div className="md:w-1/3 flex flex-row md:flex-col gap-4 sticky top-6 self-start">
              <div className="flex items-center gap-4 md:gap-0 md:flex-col md:items-start">
                <div className="w-10 h-10 rounded-full bg-n8n-primary flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(255,109,90,0.4)] z-10 shrink-0 border-4 border-[#0a0a0a]">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mt-0 md:mt-4">{flow.title}</h3>
              </div>

              <div className="hidden md:block">
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{flow.description}</p>
                <div className="flex flex-wrap gap-2">
                  {flow.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-n8n-primary"></div>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Description (visible only on small screens) */}
            <div className="md:hidden">
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{flow.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {flow.features.map((feat, i) => (
                  <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-n8n-primary font-mono">
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Column */}
            <div className="md:w-2/3">
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0f0f11] shadow-2xl group-hover:border-n8n-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                
                {/* Browser Toolbar Mockup */}
                <div className="h-9 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="ml-4 px-3 py-1 rounded-md bg-black/50 text-[10px] text-gray-500 font-mono flex-1 text-center truncate flex items-center justify-center gap-2">
                    <Workflow className="w-3 h-3 text-n8n-primary" />
                    n8n_workflow_{index + 1}.json
                  </div>
                </div>

                {/* Image Area - Clique aqui abre o modal */}
                <div 
                  className="relative group/img cursor-zoom-in bg-grid-white/[0.02]"
                  onClick={() => setSelectedImage(flow.image)}
                >
                  <img
                    src={flow.image}
                    alt={flow.title}
                    className="w-full h-auto object-cover opacity-90 transition-opacity hover:opacity-100"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover/img:opacity-100 transform translate-y-4 group-hover/img:translate-y-0 transition-all bg-black/80 backdrop-blur px-5 py-2.5 rounded-full text-white text-sm font-medium flex items-center gap-2 border border-white/10 shadow-xl">
                      <Maximize2 className="w-4 h-4" /> Ampliar Fluxo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Modal de Zoom (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full">
              <X className="w-6 h-6" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] object-contain"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- DATA ---

const experiences: Experience[] = [
  {
    role: "Especialista em IA e Automação",
    company: "Orion Inteligência Artificial",
    period: "Set 2025 - Presente", // Mantendo data conforme solicitação (futura/atual)
    description: "Desenvolvo arquiteturas de agentes e automações complexas no n8n, utilizando Function Calling e scripts personalizados em JavaScript e Python para integrar sistemas legados, ERPs e CRMs via APIs REST. Sou responsável pela sustentação de mais de 15 fluxos críticos, onde implemento monitoramento proativo e chatbots inteligentes que garantem a estabilidade das operações e a eficiência no atendimento.",
    skills: ["n8n", "Docker", "RAG", "Supabase", "JavaScript", "Uazapi API", "Evolution API", "Python", "REST APIs", "PostgreSQL", "Prompt Engineering", "SRE", "Vector Databases"]
  },
  {
    role: "Estagiário de Soluções de IA",
    company: "ArcelorMittal",
    period: "Jun 2024 - Set 2025",
    description: "Desenvolvi soluções de IA Generativa utilizando Azure OpenAI Service, integrando modelos GPT a fluxos industriais com foco em governança e segurança de dados. Atuei na criação de automações híbridas com Power Platform, aplicando práticas de DevOps e metodologias ágeis para otimizar processos administrativos e reduzir a carga de tarefas manuais.",
    skills: ["Azure OpenAI", "Power Platform", "Git", "Kanban", "DevOps", "Copilot Studio", "SharePoint"]
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "Prefeitura Municipal de Betim",
    period: "Jun 2023 - Jun 2024",
    description: "Atuei no desenvolvimento e manutenção de sistemas web utilizando ASP.NET (C#) e o padrão MVC, construindo bases lógicas sólidas para arquiteturas de software. Fui responsável pela gestão de dados em SQL, otimizando queries para a criação de relatórios gerenciais e dashboards que apoiaram a tomada de decisão.",
    skills: ["ASP.NET", "C#", "JavaScript", "REST APIs", "MVC", "Gestão de Dados", "Google Maps API", "OpenLayers API"]
  }
];

const projects: Project[] = [
  {
    id: 'whatsapp-assistant',
    title: 'Assistente WhatsApp com Inteligência Generativa',
    tagline: 'Atendimento Humanizado via WhatsApp com LLMs',
    description: 'Um agente de atendimento avançado que utiliza Grandes Modelos de Linguagem (LLMs) para interpretar intenções complexas, gerenciar o contexto da conversa e realizar agendamentos via WhatsApp. O sistema utiliza a Uazapi API para a conexão entre mensagens e um cérebro de IA no n8n que orquestra ferramentas externas (Calendário, Banco de Dados, MCP) através de Function Calling.',
    challenge: 'Empresas enfrentam dificuldade em automatizar suporte técnico via WhatsApp com chatbots tradicionais, que são robóticos, baseados em árvores de decisão rígidas e incapazes de manter o contexto de uma conversa longa ou realizar ações complexas como verificar disponibilidade em tempo real.',
    solution: 'Desenvolvi um ecossistema integrando ao WhatsApp. O backend é orquestrado no n8n, onde uma IA com System Prompt avançado gerencia o estado da conversa, utiliza ferramentas (Tools) para buscar informações no banco de dados e executa agendamentos, oferecendo uma experiência fluida e humanizada.',
    impact: [
      'Interpretação natural de mensagens de voz e texto',
      'Agendamento automático integrado ao Google Calendar via MCP',
      'Redução drástica de transbordo para humanos em dúvidas frequentes'
    ],
    metrics: [
      { label: 'Disponibilidade', value: '24/7' },
      { label: 'Resolução Nível 1', value: '95%' },
      { label: 'Retenção', value: '+40%' },
      { label: 'Custo', value: '-30%' }
    ],
    tags: ['n8n', 'Uazapi API', 'OpenAI', '11labs', 'MCP', 'Google Calendar API', 'Postgre SQL', 'Redis'],
    icon: <MessageSquare className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-600",
    keyFeatures: [
      {
        title: "Lógica Avançada (LLM)",
        desc: "Usa GPT-5 para raciocínio complexo e tomada de decisão.",
        icon: <BrainCircuit className="w-4 h-4 text-emerald-400" />
      },
      {
        title: "Integração WhatsApp",
        desc: "Conexão estável via Evolution API para envio/recebimento.",
        icon: <Smartphone className="w-4 h-4 text-green-400" />
      },
      {
        title: "Fluxo Híbrido",
        desc: "Uazapi gerencia a conversa, n8n processa a inteligência.",
        icon: <Workflow className="w-4 h-4 text-blue-400" />
      },
      {
        title: "Contexto Infinito",
        desc: "Mantém o histórico da conversa para interações naturais.",
        icon: <Database className="w-4 h-4 text-purple-400" />
      }
    ],
    workflows: [
      {
        title: "Gestor de Estado do Lead",
        description: "Ponto inicial que recebe o webhook da Uazapi. Filtra variáveis (JID, Nome), gerencia o cadastro no Supabase (Upsert), verifica follow-ups pendentes e roteia entre atendimento humano ou IA. Inclui lógica de reset (/reset) e atualização de timestamp de última atividade.",
        image: "https://wwnubuqqstssaazisvjy.supabase.co/storage/v1/object/public/images/gestor_lead.png",
        features: ["Webhook Uazapi", "Supabase Upsert", "Router Lógico", "Gestão de Sessão"]
      },
      {
        title: "Rotina de Manutenção e Reativação",
        description: "Execução agendada (Cron) ou manual que audita leads marcados como 'atendimento_humano'. Realiza processamento em lote para resetar flags e devolver leads ao fluxo de automação da IA, garantindo que nenhum lead fique estagnado.",
        image: "https://wwnubuqqstssaazisvjy.supabase.co/storage/v1/object/public/images/reativar_agente.png",
        features: ["Cron Trigger", "Batch Processing", "Supabase Query", "Auto-Recovery"]
      },
      {
        title: "Processador de Entrada & Buffer",
        description: "Converte áudio (Whisper) e imagens (GPT-4o Vision) em texto estruturado. Implementa filas no Redis com Debounce (10s) para agrupar mensagens sequenciais em um único bloco de contexto antes de enviar para o Agente.",
        image: "https://wwnubuqqstssaazisvjy.supabase.co/storage/v1/object/public/images/buffer.png",
        features: ["OpenAI Whisper", "GPT-4o Vision", "Redis Queue", "Debounce Logic"]
      },
      {
        title: "Agente de IA: Luana",
        description: "O núcleo da inteligência. Gerencia 7 fases de atendimento (Saudação a Localização) usando GPT-5-mini. Utiliza o histórico de conversas do Postgres para contexto, Tools para envio de mídias e output estruturado para agendamentos. Inclui sintetização de voz (ElevenLabs).",
        image: "https://wwnubuqqstssaazisvjy.supabase.co/storage/v1/object/public/images/agente.png",
        features: ["System Prompt Complexo", "Histórico Postgres", "ElevenLabs TTS", "Tools Calling"]
      },
      {
        title: "Servidor MCP: Gestão de Agenda",
        description: "Motor de disponibilidade conectado ao Google Calendar via protocolo MCP. Regras de negócio para horários comerciais, buffer de segurança (30min), criação e validação de eventos sem sobreposição.",
        image: "https://wwnubuqqstssaazisvjy.supabase.co/storage/v1/object/public/images/mcp.png",
        features: ["Model Context Protocol", "Google Calendar API", "Business Logic", "Event Validation"]
      },
      {
        title: "Follow-Up/Reengajamento",
        description: "Monitora inatividade (ex: 210 min). Aplica filtros de segurança e horário comercial antes de disparar mensagens dinâmicas de recuperação via WhatsApp, atualizando o funil no Supabase.",
        image: "https://wwnubuqqstssaazisvjy.supabase.co/storage/v1/object/public/images/fup.png",
        features: ["Time Triggers", "Funnel Logic", "Conditional Routing", "WhatsApp Send"]
      }
    ]
  }
];

// --- MAIN COMPONENTS ---

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'workflow' | 'overview'>('workflow');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity"
          onClick={onClose}
        ></div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-7xl h-[95vh] sm:h-[92vh] bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl ring-1 ring-white/10"
        >

          {/* Header / Tabs - REDESIGNED */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-b border-white/5 bg-[#080808] gap-4 sm:gap-0 z-20">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                {React.cloneElement(project.icon as React.ReactElement<any>, { className: "text-white w-5 h-5" })}
              </div>
              <div>
                <h2 className="text-lg font-bold text-white leading-tight">{project.title}</h2>
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">AI Automation Case</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {project.workflows && (
                <button
                  onClick={() => setActiveTab('workflow')}
                  className={`group px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 border ${activeTab === 'workflow'
                    ? 'bg-gradient-to-r from-n8n-dark to-n8n-primary border-transparent text-white shadow-[0_4px_20px_rgba(255,109,90,0.3)] scale-105'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <Workflow className={`w-4 h-4 transition-transform group-hover:rotate-12 ${activeTab === 'workflow' ? 'text-white' : 'text-n8n-primary'}`} />
                  ARQUITETURA (n8n)
                </button>
              )}

              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border ${activeTab === 'overview'
                  ? 'bg-white text-black border-transparent shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-105'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                VISÃO GERAL
              </button>
            </div>

            <button
              onClick={onClose}
              className="hidden sm:block p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="sm:hidden absolute top-4 right-4 p-2 rounded-full bg-black/50 border border-white/10 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-hidden relative bg-[#0a0a0a]">

            {/* TAB: OVERVIEW - REDESIGNED */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col lg:flex-row overflow-y-auto custom-scrollbar"
              >

                {/* Visual Column (Left) */}
                <div className="w-full lg:w-[45%] lg:order-2 bg-[#050505] relative border-b lg:border-b-0 lg:border-l border-white/5 flex flex-col min-h-[40vh] shrink-0">
                  <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
                  <div className="flex-1 p-6 sm:p-10 flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r ${project.color} blur-[100px] opacity-15`}></div>
                    <div className="relative z-10 w-full max-w-[360px] aspect-[9/16] shadow-2xl">
                      <div className="w-full h-full rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl">
                        <AestheticBotVisual />
                      </div>
                    </div>
                  </div>
                  {/* Visual Footer */}
                  <div className="p-4 border-t border-white/5 bg-[#0a0a0a] flex justify-between items-center text-[10px] text-gray-500 font-mono">
                    <span>Simulação de Conversa</span>
                    <div className="flex gap-2 items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      System Active
                    </div>
                  </div>
                </div>

                {/* Text Content Column (Right/Main) */}
                <div className="w-full lg:w-[55%] p-8 sm:p-12 bg-[#0a0a0a] flex flex-col">

                  <div className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3 leading-tight">
                      {project.tagline}
                    </h1>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {project.keyFeatures?.map((feature, i) => (
                      <div key={i} className="bg-white/[0.03] hover:bg-white/[0.05] border border-white/5 rounded-xl p-3 flex gap-3 transition-colors">
                        <div className="mt-0.5 shrink-0 bg-black/40 w-8 h-8 rounded-lg flex items-center justify-center border border-white/5">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-white text-xs font-bold mb-0.5">{feature.title}</h4>
                          <p className="text-[10px] text-gray-500 leading-snug">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="bg-gradient-to-b from-white/[0.05] to-transparent p-3 rounded-lg border border-white/5 text-center">
                        <div className="text-lg sm:text-xl font-bold text-white font-mono">{m.value}</div>
                        <div className="text-gray-500 text-[9px] uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Narrative: Challenge vs Solution */}
                  <div className="space-y-6 flex-1">
                    <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 opacity-10"><Zap className="w-12 h-12 text-red-500" /></div>
                      <h3 className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-red-500"></span> O Problema
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.challenge}</p>
                    </div>

                    <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 opacity-10"><Bot className="w-12 h-12 text-blue-500" /></div>
                      <h3 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-500"></span> A Solução
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Footer */}
                  <div className="mt-12 pt-6 border-t border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">Tecnologias Utilizadas</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full bg-[#111] border border-white/10 text-[10px] text-gray-300 font-mono hover:border-white/20 transition-colors cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB: WORKFLOW (TECHNICAL) */}
            {activeTab === 'workflow' && project.workflows && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-[#0a0a0a] overflow-y-auto custom-scrollbar p-6 sm:p-12"
              >
                <div className="max-w-6xl mx-auto">
                  <div className="mb-12 text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-n8n-primary/10 border border-n8n-primary/20 text-n8n-primary text-xs font-bold mb-4">
                      <Workflow className="w-3 h-3" /> Blueprint Técnico
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-3">Por dentro da Automação</h3>
                    <p className="text-gray-400 text-sm">
                      Abaixo você encontra os diagramas reais exportados do n8n. Cada fluxo foi desenhado para ser modular, escalável e à prova de falhas.
                    </p>
                  </div>

                  <WorkflowGallery workflows={project.workflows} />

                  <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-[#111] to-black border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                        <Layers className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Solução Escalável</h4>
                        <p className="text-gray-400 text-sm max-w-md">Os fluxos foram desenvolvidos separadamente, de acordo com a função de cada um, garantinho uma melhore manutenção e entendimento da funcionalidade.</p>
                      </div>
                    </div>
                    <a href="mailto:gustavohsc.contato@gmail.com" className="px-8 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap">
                      Contato
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Hero Mouse Spotlight Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-purple-500/30 selection:text-white pb-10">
      <div className="fixed inset-0 bg-[#050505] z-[-2]"></div>
      <div className="fixed inset-0 bg-noise z-[-1]"></div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-6"
      >
        <div className="max-w-7xl mx-auto glass-card rounded-full px-4 sm:px-6 py-3 flex justify-between items-center bg-black/40 backdrop-blur-md border border-white/5">
          <div className="flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="font-display font-bold text-white text-base sm:text-xl">GS</span>
            </div>
          </div>
          <div className="hidden sm:flex space-x-6 lg:space-x-8 text-[13px] font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">Sobre</a>
            <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
          </div>
          <a href="mailto:gustavohsc.contato@gmail.com" className="bg-white text-black px-4 sm:px-6 py-2 rounded-full text-[12px] sm:text-sm font-bold hover:bg-gray-200 transition-all">
            Contato
          </a>
        </div>
      </motion.nav>

      <main>
        {/* HERO SECTION - Interactive Spotlight */}
        <motion.section
          className="min-h-[95vh] flex items-center justify-center relative px-6 pt-24 sm:pt-20 group"
          onMouseMove={handleMouseMove}
        >
          {/* Moving Blobs */}
          <div className="absolute top-[20%] left-[5%] w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[80px] sm:blur-[100px] animate-blob"></div>
          <div className="absolute bottom-[20%] right-[5%] w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/15 rounded-full mix-blend-screen filter blur-[80px] sm:blur-[100px] animate-blob animation-delay-2000"></div>

          {/* Interactive Spotlight Gradient */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: useMotionTemplate`
                  radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(120, 50, 255, 0.1),
                    transparent 80%
                  )
                `,
            }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-[10px] sm:text-xs font-semibold mb-6 sm:mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Pronto para automatizar
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-6 sm:mb-8 tracking-tight leading-[1.1]"
            >
              Especialista em <br />
              <span className="text-gradient-primary">Automação & IA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light px-4"
            >
              Crio ecossistemas digitais autônomos com <strong className="text-white font-medium">n8n</strong>, <strong className="text-white font-medium">Python</strong> e <strong className="text-white font-medium">IA</strong> para escalar resultados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-6 sm:px-0"
            >
              <a href="#projects" className="px-8 py-4 bg-white text-black rounded-xl sm:rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center gap-2">
                Ver Projetos <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/gustavo-hsouza/" target="_blank" rel="noreferrer" className="px-8 py-4 glass-card rounded-xl sm:rounded-full font-semibold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* ABOUT & EXPERIENCE SECTION - REVAMPED */}
        <section id="about" className="py-24 relative overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

              {/* LEFT COLUMN: Sticky Profile Card */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="glass-card rounded-[2rem] p-8 border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent relative overflow-hidden"
                >
                  {/* Glowing Decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[80px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none"></div>

                  {/* Avatar / Identity */}
                  <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 animate-spin-slow blur-md opacity-50"></div>
                    <div className="relative w-full h-full rounded-full bg-[#111] border-2 border-white/10 flex items-center justify-center overflow-hidden">
                      <span className="font-display font-bold text-3xl text-white"></span>
                      <img
                        src="/perfil.jpg"
                        alt="Foto de Perfil"
                        className="w-full h-full object-cover z-10"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-4 border-[#0a0a0a] z-50" title="Available for work"></div>
                  </div>

                  <h2 className="text-3xl font-display font-bold text-white mb-2">Gustavo Souza</h2>
                  <p className="text-purple-400 font-mono text-sm mb-6">Engenheiro de Automação & IA</p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Especialista em Hiperautomação e Engenharia de IA com foco na arquitetura e orquestração de fluxos de trabalho escaláveis utilizando n8n e desenvolvimento de Agentes Autônomos.
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                      <div className="text-2xl font-bold text-white mb-1">4+</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">Anos Exp.</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                      <div className="text-2xl font-bold text-white mb-1">15+</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">Soluções Críticas</div>
                    </div>
                  </div>

                  {/* Socials & Actions */}
                  <div className="flex flex-col gap-3">
                    <a href="mailto:gustavohsc.contato@gmail.com" className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                      <Mail className="w-4 h-4" /> Entrar em Contato
                    </a>
                    <div className="flex gap-3">
                      <a href="https://www.linkedin.com/in/gustavo-hsouza/" className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1kxv9H-12uccbpJH4n9FDtZF90SIk_eIN/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                      >
                        <Download className="w-4 h-4" /> CV
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT COLUMN: Circuit Board Timeline */}
              <div className="lg:col-span-7 pt-8 lg:pt-0">
                <div className="mb-12">
                  <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-purple-500" /> Experiência & Tech
                  </h3>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative pl-8 md:pl-10 space-y-12"
                >
                  {/* The Circuit Line */}
                  <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500/20 to-transparent"></div>

                  {experiences.map((exp, index) => (
                    <motion.div key={index} variants={fadeIn} className="relative group">
                      {/* Circuit Node Dot */}
                      <div className="absolute -left-[41px] md:-left-[49px] top-6 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-purple-500 z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:animate-ping"></div>
                      </div>
                      {/* Horizontal Connector */}
                      <div className="absolute -left-[30px] top-[34px] w-8 h-0.5 bg-purple-500/50 group-hover:bg-purple-500 transition-colors duration-500"></div>

                      {/* Card */}
                      <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-500 bg-gradient-to-r from-transparent to-transparent hover:from-purple-500/[0.05] group-hover:translate-x-1">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                            <a href="#" className="text-purple-400 text-sm font-medium hover:underline flex items-center gap-1">
                              {exp.company} <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 font-mono border border-white/5 whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-md bg-[#0f0f11] border border-white/10 text-[11px] text-gray-300 font-mono flex items-center gap-1.5 hover:border-purple-500/40 hover:text-purple-200 transition-colors cursor-default">
                              <span className="w-1 h-1 rounded-full bg-purple-500"></span>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - Featured Project Layout */}
        <motion.section
          id="projects"
          className="py-20 sm:py-32 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6 text-white">Projeto em Destaque</h2>
              <p className="text-base sm:text-xl text-gray-400 font-light">
                Uma demonstração prática do poder da IA Multimodal aplicada a negócios reais.
              </p>
            </div>

            <div className="flex justify-center">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative w-full max-w-5xl cursor-pointer perspective-1000"
                >
                  {/* Abstract Background Elements behind the card */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`}></div>

                  <div className="relative glass-card bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl">
                    {/* Grid Layout */}
                    <div className="grid md:grid-cols-12 gap-0 h-full min-h-[450px]">

                      {/* Left Content (Text) - Spans 7 cols */}
                      <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-between relative z-10 bg-gradient-to-br from-white/[0.02] to-transparent">
                        {/* Header */}
                        <div>
                          <div className="flex items-center justify-between mb-8">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-20 flex items-center justify-center border border-white/10 shadow-lg shadow-rose-500/20`}>
                              {React.cloneElement(project.icon as React.ReactElement<any>, { className: "text-white w-7 h-7" })}
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md group-hover:bg-white/10 transition-colors">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                              </span>
                              <span className="text-[10px] font-bold text-rose-200 uppercase tracking-widest font-mono">Live Demo</span>
                            </div>
                          </div>

                          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight">{project.title}</h3>
                          <p className="text-lg text-rose-200/80 mb-6 font-light leading-relaxed">{project.tagline}</p>

                          <p className="text-sm text-gray-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-4 max-w-md">
                            {project.description.substring(0, 180)}...
                          </p>
                        </div>

                        {/* Footer / Tech Stack */}
                        <div>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.slice(0, 5).map((tag, i) => (
                              <span key={i} className="px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-[11px] text-gray-400 font-mono hover:bg-white/5 hover:border-white/10 transition-colors">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                            Ver Detalhes do Projeto <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>

                      {/* Right Content (Visual) - Spans 5 cols */}
                      <div className="md:col-span-5 relative min-h-[400px] md:min-h-full bg-[#050505] border-t md:border-t-0 md:border-l border-white/5 overflow-hidden">
                        {/* Background noise/grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                        {/* Glow Effect */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr ${project.color} blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

                        {/* The Visual Component */}
                        <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-[1.02]">
                          <div className="w-full h-full max-h-[420px] shadow-2xl rounded-xl overflow-hidden border border-white/10 relative z-10 bg-[#0a0a0a]">
                            <AestheticBotVisual />
                          </div>
                        </div>

                        {/* Overlay Button on Hover */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none md:pointer-events-auto">
                          <div className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl flex items-center gap-2">
                            <Maximize2 className="w-4 h-4" /> Explorar Case
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 sm:py-20 border-t border-white/5 bg-[#020202]">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">Gustavo Souza</h4>
            <p className="text-gray-600 text-[10px] sm:text-xs uppercase tracking-widest font-mono">AI Solutions Engineer</p>
          </div>

          <div className="flex gap-4 sm:gap-6">
            <a href="mailto:gustavohsc.contato@gmail.com" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="https://www.linkedin.com/in/gustavo-hsouza/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="https://github.com/souza404" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 text-center text-[10px] text-gray-700 font-mono">
          © 2026 Gustavo Souza. Construindo hoje as soluções inteligentes de amanhã.
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}