/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Check,
  ChevronDown,
  Clock,
  Compass,
  CreditCard,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
  Wind,
  X,
} from 'lucide-react';
import {
  ClinicConfig,
  DOCTORALIA_URL,
  GOOGLE_MAPS_DIRECT_URL,
  GOOGLE_PROFILE_URL,
  INSTAGRAM_URL,
  OFFICIAL_WIX_URL,
} from './standaloneHtmlGenerator';

// Fotos reais extraídas dos canais oficiais da Psicóloga Gorett Aguiar
const REAL_PHOTOS = {
  officeGreenShirt: '/images/wix_photo_2.jpg', // Foto real da Dra. Gorett Aguiar no consultório (estante ao fundo)
  doctoraliaPortrait: '/images/doctoralia_portrait.jpg', // Foto real de perfil da Dra. Gorett Aguiar no consultório
  psiCard: '/images/wix_photo_1.jpg', // Cartão oficial Gorett Aguiar Psicóloga CRP: 02/10724
  therapySession: '/images/wix_terapia.jpg', // Imagem oficial "Sessão de terapia" do site da Dra. Gorett
  patientCare: '/images/wix_paciente.jpg', // Imagem oficial "Paciente em atendimento" do site da Dra. Gorett
  onlineSession: '/images/wix_online.jpg', // Imagem oficial "Atendimento Online" do site da Dra. Gorett
  natureLake: '/images/wix_portrait.jpg', // Imagem de serenidade do site oficial da Dra. Gorett
};

interface SpecialtyItem {
  id: 'ansiedade' | 'autoconhecimento' | 'relacionamentos';
  number: string;
  title: string;
  subtitle: string;
  description: string;
  signs: string[];
  therapeuticFocus: string;
  whatsappDraft: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'ansiedade',
    number: '01.',
    title: 'Ansiedade, Angústia e Estresse',
    subtitle: 'Terapia Cognitivo-Comportamental (TCC) · Humor · Equilíbrio',
    description:
      'Acompanhamento estruturado em Terapia Cognitivo-Comportamental (TCC) para transtornos de ansiedade, ataques de pânico, angústia, alterações de humor, depressão e estresse.',
    signs: [
      'Transtornos de ansiedade, preocupação constante, angústia ou ataques de pânico',
      'Alterações do humor, desânimo persistente ou sintomas depressivos',
      'Estresse elevado e sobrecarga emocional no trabalho ou na rotina diária',
    ],
    therapeuticFocus:
      'Na TCC, identificamos padrões de pensamento e comportamento que alimentam a ansiedade, construindo ferramentas práticas de enfrentamento e regulação emocional.',
    whatsappDraft:
      'Olá, Dra. Gorett! Encontrei seu site e gostaria de agendar uma sessão para cuidar de questões relacionadas à ansiedade e equilíbrio emocional.',
    icon: Wind,
  },
  {
    id: 'autoconhecimento',
    number: '02.',
    title: 'Autoconhecimento, Autoestima e Timidez',
    subtitle: 'Desenvolvimento pessoal · Superação da insegurança · Autonomia',
    description:
      'Sessões de psicoterapia individual para jovens e adultos voltadas ao fortalecimento da autoestima, superação da timidez, insegurança e dificuldade na tomada de decisões.',
    signs: [
      'Insegurança recorrente, timidez excessiva ou fobia social',
      'Dificuldade na tomada de decisões e autocrítica severa',
      'Sentir-se para baixo e desejar desenvolver atitudes mais positivas diante da vida',
    ],
    therapeuticFocus:
      'A proposta da terapia é contribuir para o seu desenvolvimento pessoal, fortalecendo sua autoconfiança, saúde mental e qualidade de vida.',
    whatsappDraft:
      'Olá, Dra. Gorett! Encontrei seu site e gostaria de agendar uma sessão focada em autoconhecimento e fortalecimento da autoestima.',
    icon: Compass,
  },
  {
    id: 'relacionamentos',
    number: '03.',
    title: 'Relacionamentos, Família, Luto e Separações',
    subtitle: 'Especialista em Psicologia da Família · Luto · Transições',
    description:
      'Com especialização em Psicologia da Família e Realidade Social, ofereço suporte ético para lidar com conflitos afetivos e familiares, processos de separação, lutos e recomeços.',
    signs: [
      'Dificuldades e conflitos no relacionamento afetivo, conjugal ou familiar',
      'Vivência de luto, perdas significativas ou processos de separação',
      'Enfrentamento de circunstâncias traumáticas, complexas ou mudanças de fase',
    ],
    therapeuticFocus:
      'Ofereço um espaço de escuta ética e acolhedora com ferramentas clínicas para elaborar perdas, amadurecer vínculos e atravessar transições com segurança.',
    whatsappDraft:
      'Olá, Dra. Gorett! Encontrei seu site e gostaria de agendar uma sessão para apoio em questões de relacionamento e transição de vida.',
    icon: HeartHandshake,
  },
];

interface RealReviewItem {
  author: string;
  source: string;
  dateOrLocation: string;
  quote: string;
  verifiedTag: string;
  doctorReply?: string;
}

const REAL_REVIEWS: RealReviewItem[] = [
  {
    author: 'Mariana L.',
    source: 'Doctoralia · Lottus Consultórios Integrados',
    dateOrLocation: 'Psicoterapia · Recife - PE',
    verifiedTag: 'Opinião Verificada',
    quote:
      'Profissional super competente, atenciosa, acolhedora, paciente. Obtive resultados positivos com o tratamento. Recomendo!',
  },
  {
    author: 'L. A.',
    source: 'Doctoralia · Lottus Consultórios Integrados',
    dateOrLocation: 'Psicoterapia · Recife - PE',
    verifiedTag: 'Opinião Verificada',
    quote:
      'Excelente profissional! Muito atenciosa, dedicada, competente. Ótimo atendimento! Deixa a pessoa à vontade. Recomendo!',
    doctorReply: 'Obrigada pelo seu feedback e confiança! Abraço! — Gorett Aguiar',
  },
  {
    author: 'Suzana Karine',
    source: 'Google Meu Negócio',
    dateOrLocation: 'Boa Viagem, Recife - PE',
    verifiedTag: 'Avaliação 5 Estrelas no Google',
    quote: 'Profissional séria e comprometida! Indico o atendimento excelente!',
  },
  {
    author: 'Shirlene Vieira',
    source: 'Google Meu Negócio',
    dateOrLocation: 'Boa Viagem, Recife - PE',
    verifiedTag: 'Avaliação 5 Estrelas no Google',
    quote: 'Excelente profissional.',
  },
  {
    author: 'Larissa Araújo',
    source: 'Google Meu Negócio',
    dateOrLocation: 'Boa Viagem, Recife - PE',
    verifiedTag: 'Avaliação 5 Estrelas no Google',
    quote: 'Ótima Profissional.',
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como funciona a primeira sessão e a abordagem em TCC?',
    answer:
      'A primeira sessão compreende o acolhimento inicial e a anamnese psicológica dentro da abordagem da Terapia Cognitivo-Comportamental (TCC). Conversaremos sobre o que motivou sua busca pela terapia, seus objetivos e expectativas, estruturando um plano terapêutico individualizado para ajudar você a lidar com as circunstâncias desafiadoras da vida.',
  },
  {
    question: 'Qual o horário de funcionamento e onde fica o consultório presencial?',
    answer:
      'O atendimento ocorre de Segunda a Sexta-feira das 08h30 às 20h00 e aos Sábados das 09h00 às 12h00, mediante agendamento prévio. O consultório presencial está localizado no Lottus Consultórios Integrados — Rua Ernesto de Paula Santos, nº 1172, Sala 504, Boa Viagem, Recife - PE (CEP 51021-330), contando com entrada acessível para cadeira de rodas.',
  },
  {
    question: 'O atendimento online tem a mesma eficácia do presencial?',
    answer:
      'Sim. Na modalidade online (teleconsulta), a sessão se dá no mesmo modelo presencial, porém mediada pela tecnologia e regulamentada pelo Conselho Federal de Psicologia. É indicado que o paciente esteja em um local tranquilo e privado, conectado à internet por smartphone, tablet ou notebook, com câmera e áudio funcionando bem, preferencialmente com fones de ouvido e certificado de que não será interrompido.',
  },
  {
    question: 'Vocês atendem por convênio ou reembolso? Quais as formas de pagamento?',
    answer:
      'Os atendimentos são realizados na modalidade particular para garantir um acompanhamento dedicado, pontual e personalizado (com emissão de recibo para solicitação de reembolso junto ao seu plano de saúde). São aceitos pagamentos via PIX, Transferência Bancária, Depósito Bancário, Cartão de Débito e Cartão de Crédito.',
  },
];

export default function App() {
  // Dados reais da Dra. Gorett Aguiar
  const clinicConfig: ClinicConfig = {
    crp: 'CRP: 02/10724',
    approach: 'Terapia Cognitivo-Comportamental (TCC) · Psicologia da Família (UFC)',
    whatsappNumber: '5581983550457',
    phoneDisplay: '(81) 98355-0457',
    email: 'gorettsa@gmail.com',
    addressTitle: 'Lottus Consultórios Integrados',
    addressLine: 'Rua Ernesto de Paula Santos, 1172, Sala 504 – Boa Viagem, Recife - PE',
    cep: '51021-330',
    hoursWeekdays: '08:30 às 20:00',
    hoursSaturday: '09:00 às 12:00',
  };

  const [heroPhotoVariant, setHeroPhotoVariant] = useState<'office' | 'portrait'>('office');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<
    'todas' | 'ansiedade' | 'autoconhecimento' | 'relacionamentos'
  >('todas');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Estados de resiliência de imagem
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const markImgError = (key: string) =>
    setImgErrors((prev) => ({
      ...prev,
      [key]: true,
    }));

  // Estado do formulário de pré-agendamento rápido para WhatsApp (81) 98355-0457
  const [patientName, setPatientName] = useState('');
  const [preferredModality, setPreferredModality] = useState<'Presencial (Boa Viagem)' | 'Online'>(
    'Presencial (Boa Viagem)'
  );
  const [preferredShift, setPreferredShift] = useState<
    'Manhã (08:30-12:00)' | 'Tarde (13:00-17:30)' | 'Noite (18:00-20:00)' | 'Sábado (09:00-12:00)'
  >('Tarde (13:00-17:30)');
  const [patientTopic, setPatientTopic] = useState('Ansiedade, estresse e equilíbrio emocional');
  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-item');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Paleta Azul Psi Oficial (Cartão CRP 02/10724 da Dra. Gorett Aguiar)
  const palette = {
    bgMain: '#FAF9F6',
    bgSecondary: '#EEF3F7',
    primary: '#0277BD',
    primaryHover: '#01579B',
    accent: '#C89D7C',
    textMain: '#1E293B',
    name: 'Azul Psi (Cartão CRP 02/10724)',
  };

  const cleanPhone = clinicConfig.whatsappNumber.replace(/\D/g, '') || '5581983550457';
  const buildWhatsappUrl = (customText?: string) => {
    const message =
      customText ||
      'Olá, Dra. Gorett! Encontrei seu site e gostaria de informações para agendar uma sessão de psicoterapia.';
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  const handleScheduleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = patientName.trim();
    if (trimmedName.length < 2) {
      setFormError('Por favor, informe seu nome para iniciarmos o atendimento pelo WhatsApp.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
    const customMsg = `Olá, Dra. Gorett! Meu nome é ${trimmedName}. Encontrei seu site e gostaria de verificar horários disponíveis para agendar uma sessão.\n\n• Modalidade: ${preferredModality}\n• Turno de preferência: ${preferredShift}\n• Demanda principal: ${patientTopic}`;
    const url = buildWhatsappUrl(customMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const activeSpecialtyDetail =
    SPECIALTIES.find((s) => s.id === selectedSpecialtyId) || SPECIALTIES[0];

  const currentHeroPhoto =
    heroPhotoVariant === 'office'
      ? REAL_PHOTOS.officeGreenShirt
      : REAL_PHOTOS.doctoraliaPortrait;

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: palette.bgMain, color: palette.textMain }}
    >
      {/* =======================================================================
          1. CABEÇALHO (NAVBAR FIXO E DISCRETO - CONTRATO DE 3 ZONAS)
      ======================================================================== */}
      <header
        className="sticky top-0 z-40 backdrop-blur-md border-b border-black/10"
        style={{ backgroundColor: `${palette.bgMain}F2` }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zona 1: Nome/Logo tipográfico em linha única */}
          <a
            href="#inicio"
            className="font-editorial text-xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap shrink-0 transition-opacity hover:opacity-80"
          >
            Gorett Aguiar | Psicóloga
          </a>

          {/* Zona 2: Links de navegação rápida em linha única */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium opacity-85"
          >
            <a
              href="#sobre"
              className="underline-offset-4 hover:underline transition-opacity whitespace-nowrap shrink-0"
            >
              Sobre Mim
            </a>
            <a
              href="#atendimento"
              className="underline-offset-4 hover:underline transition-opacity whitespace-nowrap shrink-0"
            >
              Atendimento
            </a>
            <a
              href="#avaliacoes"
              className="underline-offset-4 hover:underline transition-opacity whitespace-nowrap shrink-0"
            >
              Avaliações
            </a>
            <a
              href="#contato"
              className="underline-offset-4 hover:underline transition-opacity whitespace-nowrap shrink-0"
            >
              Contato
            </a>
          </nav>

          {/* Zona 3: 1 Ação Primária + Menu Mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: palette.primary }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
            >
              Agendar Consulta
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-black/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-b border-black/10 px-5 pt-3 pb-6 space-y-2"
            style={{ backgroundColor: palette.bgMain }}
          >
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-base font-medium border-b border-black/5"
            >
              Sobre Mim (CRP 02/10724)
            </a>
            <a
              href="#atendimento"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-base font-medium border-b border-black/5"
            >
              Atendimento (Boa Viagem e Online)
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-base font-medium border-b border-black/5"
            >
              Avaliações Reais do Google
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-base font-medium"
            >
              Contato e Localização
            </a>
            <div className="pt-2">
              <a
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                style={{ backgroundColor: palette.primary }}
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white rounded-xl transition-opacity whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar pelo WhatsApp {clinicConfig.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* =====================================================================
            2. SEÇÃO HERO (PRIMEIRA DOBRA COM FOTO REAL DA DRA. GORETT AGUIAR)
        ====================================================================== */}
        <section
          id="inicio"
          className="relative overflow-hidden pt-10 pb-16 sm:py-20 lg:py-24 border-b border-black/10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-75"
            style={{ backgroundColor: palette.bgSecondary }}
          />

          <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Coluna Esquerda: Headline, Dados Reais e CTAs */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6 reveal-item is-visible">
                {/* Metadados reais sem pílulas */}
                <div
                  className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold"
                  style={{ color: palette.primary }}
                >
                  <span>Psicóloga Clínica</span>
                  <span aria-hidden="true">·</span>
                  <span>{clinicConfig.crp}</span>
                  <span aria-hidden="true">·</span>
                  <span>Terapia Cognitivo-Comportamental (TCC)</span>
                </div>

                <h1
                  className="font-editorial text-4xl sm:text-5xl lg:text-[3.35rem] font-semibold leading-[1.13] tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Um espaço seguro para você se reencontrar, cuidar da sua saúde emocional e
                  construir uma vida mais leve.
                </h1>

                <p className="text-base sm:text-lg opacity-85 leading-relaxed max-w-2xl">
                  Como psicóloga profissional e comprometida há mais de 24 anos, o seu bem-estar e
                  saúde mental são a minha prioridade. Terei o prazer de acompanhar você na
                  superação dos desafios da vida com atenção, ética e o cuidado merecido —
                  presencialmente em <strong>Boa Viagem (Recife)</strong> e <strong>Online</strong>.
                </p>

                {/* CTAs Principal e Secundário */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={buildWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: palette.primary }}
                    className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-semibold text-white rounded-xl shadow-sm hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Agendar minha primeira sessão</span>
                  </a>

                  <a
                    href="#sobre"
                    style={{ backgroundColor: palette.bgSecondary }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium rounded-xl hover:opacity-85 transition-opacity whitespace-nowrap shrink-0 border border-black/5"
                  >
                    <span>Conhecer meu trabalho</span>
                    <ArrowDown className="w-4 h-4 shrink-0" style={{ color: palette.primary }} />
                  </a>
                </div>

                {/* Dados Reais de Localização e Horário na Primeira Dobra */}
                <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm opacity-75">
                  <span>{clinicConfig.addressTitle} (Boa Viagem, Recife - PE)</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">WhatsApp {clinicConfig.phoneDisplay}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">Seg a Sáb</span>
                </div>
              </div>

              {/* Coluna Direita: Foto Real da Dra. Gorett Aguiar + Seletor entre as 2 Fotos Reais de Perfil */}
              <div className="lg:col-span-5 flex flex-col justify-center reveal-item is-visible">
                <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                  {/* Forma orgânica ao fundo */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 rounded-[2.25rem] -rotate-1 border border-black/10"
                    style={{ backgroundColor: palette.bgSecondary }}
                  />

                  <div
                    className="relative overflow-hidden rounded-[1.75rem] border border-black/10 aspect-square shadow-sm"
                    style={{ backgroundColor: palette.bgSecondary }}
                  >
                    {!imgErrors[heroPhotoVariant] ? (
                      <img
                        src={currentHeroPhoto}
                        alt="Foto real da Psicóloga Clínica Gorett Aguiar (CRP 02/10724) em seu consultório em Recife"
                        referrerPolicy="no-referrer"
                        onError={() => markImgError(heroPhotoVariant)}
                        className="w-full h-full object-cover object-center transition-opacity duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                        <Sparkles className="w-10 h-10 mb-3" style={{ color: palette.primary }} />
                        <p className="font-editorial text-2xl font-semibold">Dra. Gorett Aguiar</p>
                        <p className="text-xs opacity-70 mt-1">
                          Psicóloga Clínica · {clinicConfig.crp}
                        </p>
                      </div>
                    )}

                    {/* Scrim de contraste na base */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 sm:p-6 text-white">
                      <p className="font-editorial text-2xl font-medium leading-snug">
                        Gorett Aguiar
                      </p>
                      <p className="text-xs text-white/90 mt-0.5">
                        Psicóloga Clínica · {clinicConfig.crp} · Formada pela UFC
                      </p>
                    </div>
                  </div>

                  {/* Controle interativo para alternar entre as fotos reais da Dra. Gorett */}
                  <div className="relative mt-4 flex items-center justify-between gap-2 px-1">
                    <span className="text-xs opacity-70">Fotos reais do consultório:</span>
                    <div
                      className="inline-flex items-center gap-1 p-1 rounded-lg border border-black/10"
                      style={{ backgroundColor: palette.bgSecondary }}
                    >
                      <button
                        type="button"
                        onClick={() => setHeroPhotoVariant('office')}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                          heroPhotoVariant === 'office'
                            ? 'bg-white text-black shadow-2xs'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        Foto Consultório 1
                      </button>
                      <button
                        type="button"
                        onClick={() => setHeroPhotoVariant('portrait')}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                          heroPhotoVariant === 'portrait'
                            ? 'bg-white text-black shadow-2xs'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        Foto Consultório 2
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Faixa de Credenciais Reais em Largura Total Abaixo da Dobra Hero */}
            <div className="mt-12 pt-8 border-t border-black/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div>
                <p className="font-editorial text-xl font-semibold">
                  +24 Anos de Experiência (UFC)
                </p>
                <p className="text-xs sm:text-sm opacity-75 mt-1">
                  Graduada pela Universidade Federal do Ceará com trajetória clínica consolidada.
                </p>
              </div>
              <div>
                <p className="font-editorial text-xl font-semibold">
                  Especialista em Família &amp; TCC
                </p>
                <p className="text-xs sm:text-sm opacity-75 mt-1">
                  Pós-graduada em Psicologia da Família e Realidade Social com foco em TCC.
                </p>
              </div>
              <div>
                <p className="font-editorial text-xl font-semibold">
                  Boa Viagem, Recife &amp; Online
                </p>
                <p className="text-xs sm:text-sm opacity-75 mt-1">
                  Lottus Consultórios Integrados (Sala 504) e teleconsulta para todo o Brasil.
                </p>
              </div>
              <div>
                <p className="font-editorial text-xl font-semibold tabular-nums">
                  Nota 5.0 ★★★★★ no Google
                </p>
                <p className="text-xs sm:text-sm opacity-75 mt-1">
                  Avaliações verificadas no Google Meu Negócio e Doctoralia por pacientes reais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. COMO POSSO TE AJUDAR (ESPECIALIDADES REAIS EM TCC)
        ====================================================================== */}
        <section
          className="py-16 sm:py-24 border-b border-black/10"
          style={{ backgroundColor: palette.bgSecondary }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 reveal-item">
              <div className="max-w-2xl">
                <p
                  className="text-xs sm:text-sm font-semibold mb-2"
                  style={{ color: palette.primary }}
                >
                  Terapia Cognitivo-Comportamental (TCC) · Jovens e Adultos
                </p>
                <h2
                  className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Como posso te ajudar na superação dos desafios da vida
                </h2>
                <p className="mt-3 text-base opacity-80 leading-relaxed">
                  A proposta da terapia é contribuir para o desenvolvimento pessoal do paciente,
                  ajudando-o a melhorar os seus aspectos emocionais, sua saúde mental e qualidade de
                  vida.
                </p>
              </div>

              {/* Filtro Interativo de Especialidades */}
              <div
                role="tablist"
                aria-label="Filtrar áreas de atuação"
                className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-xl border border-black/10 self-start"
                style={{ backgroundColor: palette.bgMain }}
              >
                {(
                  [
                    { id: 'todas', label: 'Todas as Áreas' },
                    { id: 'ansiedade', label: 'Ansiedade e Humor' },
                    { id: 'autoconhecimento', label: 'Autoestima e Timidez' },
                    { id: 'relacionamentos', label: 'Família, Luto e Relações' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedSpecialtyId === tab.id}
                    onClick={() => setSelectedSpecialtyId(tab.id)}
                    style={
                      selectedSpecialtyId === tab.id
                        ? { backgroundColor: palette.primary, color: '#FFFFFF' }
                        : undefined
                    }
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      selectedSpecialtyId === tab.id ? '' : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grade Responsiva (1 coluna no celular, 3 no desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 reveal-item">
              {SPECIALTIES.map((item) => {
                const IconComponent = item.icon;
                const isHighlighted =
                  selectedSpecialtyId !== 'todas' && selectedSpecialtyId === item.id;

                return (
                  <article
                    key={item.id}
                    onClick={() => setSelectedSpecialtyId(item.id)}
                    style={{
                      backgroundColor: palette.bgMain,
                      borderColor: isHighlighted ? palette.primary : 'rgba(0,0,0,0.1)',
                    }}
                    className="cursor-pointer p-7 sm:p-8 rounded-2xl border transition-all duration-150 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${palette.primary}1A`,
                            color: palette.primary,
                          }}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span
                          className="font-editorial text-xl font-semibold tabular-nums"
                          style={{ color: palette.accent }}
                        >
                          {item.number}
                        </span>
                      </div>

                      <h3 className="font-editorial text-2xl sm:text-[1.65rem] font-semibold leading-snug mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base opacity-80 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-black/10">
                        <p className="text-xs font-semibold opacity-70">
                          Demandas frequentes em consultório:
                        </p>
                        {item.signs.map((sign, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm opacity-80 leading-relaxed"
                          >
                            <Check
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: palette.primary }}
                            />
                            <span>{sign}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 pt-4 border-t border-black/10 flex items-center justify-between gap-2">
                      <span className="text-xs opacity-65 truncate">{item.subtitle}</span>
                      <a
                        href={buildWhatsappUrl(item.whatsappDraft)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: palette.primary }}
                        className="inline-flex items-center gap-1 text-xs font-semibold hover:underline whitespace-nowrap shrink-0"
                      >
                        Agendar sobre isso
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {selectedSpecialtyId !== 'todas' && (
              <div
                className="mt-8 p-6 sm:p-8 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                style={{
                  backgroundColor: palette.bgMain,
                  borderColor: `${palette.primary}4D`,
                }}
              >
                <div className="space-y-1.5 max-w-2xl">
                  <p className="text-xs font-semibold" style={{ color: palette.primary }}>
                    Como trabalhamos em sessão · {activeSpecialtyDetail.title}
                  </p>
                  <p className="font-editorial text-2xl font-semibold">
                    {activeSpecialtyDetail.therapeuticFocus}
                  </p>
                </div>
                <a
                  href={buildWhatsappUrl(activeSpecialtyDetail.whatsappDraft)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: palette.primary }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar com a Dra. Gorett no WhatsApp
                </a>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================================
            4. SOBRE A PSICÓLOGA GORETT AGUIAR (HISTÓRIA REAL, FOTOS REAIS E PALETA)
        ====================================================================== */}
        <section id="sobre" className="py-16 sm:py-24 scroll-mt-16 border-b border-black/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Coluna Esquerda: Retratos Reais + Cartão Oficial CRP 02/10724 */}
              <div className="lg:col-span-5 space-y-4 reveal-item">
                <div className="grid grid-cols-2 gap-4">
                  {/* Foto Real 1: No consultório com estante ao fundo */}
                  <div
                    className="col-span-2 overflow-hidden rounded-2xl border border-black/10 aspect-[4/3]"
                    style={{ backgroundColor: palette.bgSecondary }}
                  >
                    {!imgErrors.aboutMain ? (
                      <img
                        src={REAL_PHOTOS.officeGreenShirt}
                        alt="Psicóloga Gorett Aguiar em seu consultório no Lottus Consultórios Integrados em Boa Viagem, Recife"
                        referrerPolicy="no-referrer"
                        onError={() => markImgError('aboutMain')}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-6 text-center">
                        <p className="font-editorial text-xl font-semibold">
                          Dra. Gorett Aguiar · {clinicConfig.crp}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Foto Real 2: Retrato Doctoralia / Consultório */}
                  <div
                    className="overflow-hidden rounded-2xl border border-black/10 aspect-square"
                    style={{ backgroundColor: palette.bgSecondary }}
                  >
                    {!imgErrors.aboutPortrait ? (
                      <img
                        src={REAL_PHOTOS.doctoraliaPortrait}
                        alt="Retrato da Psicóloga Gorett Aguiar sorrindo em seu consultório"
                        referrerPolicy="no-referrer"
                        onError={() => markImgError('aboutPortrait')}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-4 text-center text-xs">
                        Gorett Aguiar
                      </div>
                    )}
                  </div>

                  {/* Foto Real 3: Cartão Oficial Psicóloga Gorett Aguiar CRP 02/10724 */}
                  <div
                    className="overflow-hidden rounded-2xl border border-black/10 aspect-square flex flex-col justify-between p-2"
                    style={{ backgroundColor: '#0182C6' }}
                  >
                    {!imgErrors.psiCard ? (
                      <img
                        src={REAL_PHOTOS.psiCard}
                        alt="Identidade visual oficial Gorett Aguiar Psicóloga CRP 02/10724"
                        referrerPolicy="no-referrer"
                        onError={() => markImgError('psiCard')}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-white text-center p-3">
                        <p className="font-editorial text-xl font-bold">Gorett Aguiar</p>
                        <p className="text-xs">PSICÓLOGA · {clinicConfig.crp}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Selo Real de Acessibilidade do Google Maps (wheelchair_accessible_entrance) */}
                <div
                  className="p-4 rounded-xl border border-black/10 flex items-start gap-3.5"
                  style={{ backgroundColor: palette.bgSecondary }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${palette.primary}1A`, color: palette.primary }}
                  >
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      Acessibilidade Verificada no Google Maps
                    </p>
                    <p className="text-xs opacity-75 leading-relaxed mt-0.5">
                      Consultório no <strong>{clinicConfig.addressTitle}</strong> com entrada
                      acessível para cadeira de rodas, elevador, climatização e privacidade acústica
                      em Boa Viagem, Recife.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coluna Direita: Texto Real "Minha História" + Dados Oficiais */}
              <div className="lg:col-span-7 space-y-6 reveal-item">
                <div>
                  <p
                    className="text-xs sm:text-sm font-semibold"
                    style={{ color: palette.primary }}
                  >
                    Minha História · {clinicConfig.crp}
                  </p>
                </div>

                <h2
                  className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Prazer, sou Gorett Aguiar — Psicóloga Clínica formada pela UFC
                </h2>

                <p className="text-base opacity-85 leading-relaxed">
                  Sou formada em Psicologia há mais de <strong>24 anos</strong> pela{' '}
                  <strong>Universidade Federal do Ceará (UFC)</strong> e possuo{' '}
                  <strong>Especialização em Psicologia da Família e Realidade Social</strong>.
                  Trabalho com foco na <strong>Terapia Cognitivo-Comportamental (TCC)</strong>,
                  realizando atendimento individual de jovens e adultos de forma presencial em
                  Recife e online.
                </p>

                <p className="text-base opacity-80 leading-relaxed">
                  Atuar na área clínica faz-me sentir realizada como profissional. Dedico-me ao
                  bem-estar dos meus pacientes e forneço as ferramentas necessárias para enfrentar
                  as circunstâncias mais complexas, desafiadoras e traumáticas da vida. Minhas
                  sessões ajudam os pacientes a desenvolverem atitudes construtivas e a encontrarem
                  o melhor de si mesmos em um espaço ético, acolhedor e livre de julgamentos.
                </p>

                {/* Citação presente no site oficial da Dra. Gorett Aguiar */}
                <div
                  className="p-5 rounded-2xl border border-black/10"
                  style={{ backgroundColor: palette.bgSecondary }}
                >
                  <p className="font-editorial text-xl sm:text-2xl italic leading-relaxed">
                    &ldquo;Não se torne um mero registrador dos fatos, tente penetrar no mistério de
                    sua origem.&rdquo;
                  </p>
                  <p className="text-xs opacity-70 mt-1.5 font-medium">
                    — Ivan Pavlov (Citação em destaque no site oficial da Dra. Gorett Aguiar)
                  </p>
                </div>

                {/* Bloco de Credenciais Oficiais */}
                <div
                  className="p-6 rounded-2xl border border-black/10"
                  style={{ backgroundColor: palette.bgSecondary }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex items-start gap-3">
                      <GraduationCap
                        className="w-5 h-5 shrink-0 mt-1"
                        style={{ color: palette.primary }}
                      />
                      <div>
                        <p className="text-xs opacity-65">Registro e Formação Acadêmica</p>
                        <p className="font-editorial text-xl font-semibold mt-0.5">
                          {clinicConfig.crp} (CRP-PE)
                        </p>
                        <p className="text-xs opacity-80 mt-0.5">
                          Graduação em Psicologia (UFC) · Especialista em Psicologia da Família
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award
                        className="w-5 h-5 shrink-0 mt-1"
                        style={{ color: palette.primary }}
                      />
                      <div>
                        <p className="text-xs opacity-65">Abordagem e Horários</p>
                        <p className="font-editorial text-xl font-semibold mt-0.5">
                          Terapia Cognitivo-Comportamental
                        </p>
                        <p className="text-xs opacity-80 mt-0.5 tabular-nums">
                          Seg-Sex: {clinicConfig.hoursWeekdays} · Sáb: {clinicConfig.hoursSaturday}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-4">
                  <a
                    href={buildWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: palette.primary }}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Agendar com Dra. Gorett {clinicConfig.phoneDisplay}
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium opacity-85 hover:opacity-100 transition-opacity whitespace-nowrap shrink-0"
                  >
                    <Instagram className="w-4 h-4" style={{ color: palette.primary }} />
                    @psi_gorettaguiar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. MODALIDADES DE ATENDIMENTO (PRESENCIAL EM BOA VIAGEM E ONLINE)
        ====================================================================== */}
        <section
          id="atendimento"
          className="py-16 sm:py-24 border-b border-black/10 scroll-mt-16"
          style={{ backgroundColor: palette.bgSecondary }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="max-w-2xl mb-12 reveal-item">
              <p
                className="text-xs sm:text-sm font-semibold mb-2"
                style={{ color: palette.primary }}
              >
                Serviços Psicológicos Oferecidos
              </p>
              <h2
                className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Modalidades de Atendimento: Presencial em Recife e Online
              </h2>
              <p className="mt-3 text-base opacity-80 leading-relaxed">
                Psicoterapia individual para jovens e adultos com a mesma qualidade técnica,
                pontualidade e sigilo ético no consultório em Boa Viagem ou por videochamada.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-item">
              {/* Card 1: Atendimento Online (Foto Real do Site da Dra. Gorett) */}
              <div
                className="rounded-2xl border border-black/10 overflow-hidden flex flex-col justify-between"
                style={{ backgroundColor: palette.bgMain }}
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden border-b border-black/10 bg-black/5">
                    {!imgErrors.modOnline ? (
                      <img
                        src={REAL_PHOTOS.onlineSession}
                        alt="Atendimento psicológico online da Psicóloga Gorett Aguiar"
                        referrerPolicy="no-referrer"
                        onError={() => markImgError('modOnline')}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Video className="w-10 h-10" style={{ color: palette.primary }} />
                      </div>
                    )}
                  </div>

                  <div className="p-7 sm:p-9 space-y-4">
                    <div
                      className="flex items-center justify-between text-xs font-semibold"
                      style={{ color: palette.primary }}
                    >
                      <span>Teleconsulta · Assistência de Qualidade</span>
                      <Video className="w-4 h-4 shrink-0" />
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold">
                      Atendimento Online
                    </h3>

                    <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                      A sessão se dá no mesmo modelo presencial, porém mediada pela tecnologia. É
                      indicado que o paciente esteja em um local tranquilo e privado, conectado à
                      internet com smartphone, tablet ou notebook, com câmera e áudio funcionando
                      bem, preferencialmente com fones de ouvido e certificado de que não será
                      interrompido.
                    </p>

                    <ul className="space-y-2.5 pt-2 text-sm opacity-85">
                      <li className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 shrink-0 mt-1"
                          style={{ color: palette.primary }}
                        />
                        <span>
                          Consulta de psicologia online individual para jovens e adultos
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 shrink-0 mt-1"
                          style={{ color: palette.primary }}
                        />
                        <span>
                          Praticidade, conforto e sigilo ético sem necessidade de deslocamento
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 shrink-0 mt-1"
                          style={{ color: palette.primary }}
                        />
                        <span>
                          Horários amplos de segunda a sexta ({clinicConfig.hoursWeekdays}) e
                          sábado ({clinicConfig.hoursSaturday})
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-7 sm:px-9 pb-7 sm:pb-9 pt-4 border-t border-black/10 flex items-center justify-between gap-4">
                  <a
                    href={buildWhatsappUrl(
                      'Olá, Dra. Gorett! Gostaria de informações para agendar uma sessão na modalidade Online.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: palette.primary }}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Agendar Sessão Online
                  </a>
                  <span className="text-xs opacity-65 tabular-nums">Via Videochamada</span>
                </div>
              </div>

              {/* Card 2: Atendimento Presencial em Boa Viagem, Recife (Foto Real do Site da Dra. Gorett) */}
              <div
                className="rounded-2xl border border-black/10 overflow-hidden flex flex-col justify-between"
                style={{ backgroundColor: palette.bgMain }}
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden border-b border-black/10 bg-black/5">
                    {!imgErrors.modPresencial ? (
                      <img
                        src={REAL_PHOTOS.therapySession}
                        alt="Sessão de psicoterapia presencial no Lottus Consultórios Integrados em Boa Viagem, Recife"
                        referrerPolicy="no-referrer"
                        onError={() => markImgError('modPresencial')}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <MapPin className="w-10 h-10" style={{ color: palette.primary }} />
                      </div>
                    )}
                  </div>

                  <div className="p-7 sm:p-9 space-y-4">
                    <div
                      className="flex items-center justify-between text-xs font-semibold"
                      style={{ color: palette.primary }}
                    >
                      <span>{clinicConfig.addressTitle} · Boa Viagem, Recife - PE</span>
                      <MapPin className="w-4 h-4 shrink-0" />
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold">
                      Atendimento Presencial
                    </h3>

                    <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                      Realizado no <strong>{clinicConfig.addressTitle}</strong>, localizado na{' '}
                      <strong>{clinicConfig.addressLine}</strong> (CEP {clinicConfig.cep}). Um
                      ambiente acolhedor, reservado e preparado para receber você com conforto e
                      acessibilidade.
                    </p>

                    <ul className="space-y-2.5 pt-2 text-sm opacity-85">
                      <li className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 shrink-0 mt-1"
                          style={{ color: palette.primary }}
                        />
                        <span>
                          Rua Ernesto de Paula Santos, 1172, Sala 504 – Boa Viagem, Recife - PE
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 shrink-0 mt-1"
                          style={{ color: palette.primary }}
                        />
                        <span>
                          Entrada acessível para cadeira de rodas verificada na página do Google
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 shrink-0 mt-1"
                          style={{ color: palette.primary }}
                        />
                        <span>
                          Pagamentos: PIX, Transferência, Cartão de Débito e Cartão de Crédito
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-7 sm:px-9 pb-7 sm:pb-9 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={buildWhatsappUrl(
                      'Olá, Dra. Gorett! Gostaria de informações para agendar uma sessão Presencial no consultório em Boa Viagem.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: palette.primary }}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Agendar Presencial
                  </a>

                  <a
                    href={GOOGLE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5" style={{ color: palette.primary }} />
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. PROVA SOCIAL E AVALIAÇÕES REAIS (GOOGLE MEU NEGÓCIO & DOCTORALIA)
        ====================================================================== */}
        <section id="avaliacoes" className="py-16 sm:py-24 border-b border-black/10 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 reveal-item">
              <div className="max-w-2xl">
                <p
                  className="text-xs sm:text-sm font-semibold mb-2"
                  style={{ color: palette.primary }}
                >
                  Avaliações Reais · Google Meu Negócio &amp; Doctoralia
                </p>
                <h2
                  className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  O que dizem os pacientes sobre o atendimento da Dra. Gorett Aguiar
                </h2>
                <p className="mt-3 text-base opacity-80 leading-relaxed">
                  Depoimentos reais retirados da ficha oficial do Google Meu Negócio e opiniões
                  verificadas de pacientes acompanhados no Lottus Consultórios Integrados.
                </p>
              </div>

              {/* Bloco 5 Estrelas + Botões para Google e Doctoralia */}
              <div
                className="p-4 sm:p-5 rounded-2xl border border-black/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0"
                style={{ backgroundColor: palette.bgSecondary }}
              >
                <div>
                  <div className="flex items-center gap-1" style={{ color: '#D97706' }}>
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1.5 text-sm font-bold text-black tabular-nums">
                      5.0 de 5
                    </span>
                  </div>
                  <p className="text-xs opacity-75 mt-0.5">
                    Avaliação máxima no Google &amp; Doctoralia
                  </p>
                </div>

                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: palette.bgMain }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold border border-black/15 rounded-xl hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
                >
                  <span>Página Oficial no Google</span>
                  <ExternalLink className="w-3.5 h-3.5" style={{ color: palette.primary }} />
                </a>
              </div>
            </div>

            {/* Grade com as 5 Avaliações Reais Verificadas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-item">
              {REAL_REVIEWS.map((rev, index) => (
                <blockquote
                  key={index}
                  style={{ backgroundColor: palette.bgSecondary }}
                  className={`p-7 rounded-2xl border border-black/10 flex flex-col justify-between ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1" style={{ color: '#D97706' }}>
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <span className="text-xs font-medium opacity-70">{rev.verifiedTag}</span>
                    </div>

                    <p className="text-base sm:text-lg opacity-90 leading-relaxed italic">
                      &ldquo;{rev.quote}&rdquo;
                    </p>

                    {rev.doctorReply && (
                      <div
                        className="mt-4 p-3.5 rounded-xl border border-black/10 text-xs leading-relaxed"
                        style={{ backgroundColor: palette.bgMain }}
                      >
                        <strong className="font-semibold">Resposta da especialista: </strong>
                        <span className="opacity-80">{rev.doctorReply}</span>
                      </div>
                    )}
                  </div>

                  <footer className="mt-6 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <strong className="font-semibold text-sm">{rev.author}</strong>
                    <span className="opacity-70">
                      {rev.source} · {rev.dateOrLocation}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Galeria Visual Real: Fotos Oficiais do Site, Consultório e Instagram @psi_gorettaguiar */}
            <div className="mt-14 pt-12 border-t border-black/10 reveal-item">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: palette.primary }}>
                    Presença Digital &amp; Consultório Real
                  </p>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold">
                    Registros Oficiais e Conteúdos no Instagram @psi_gorettaguiar
                  </h3>
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold hover:underline whitespace-nowrap shrink-0"
                  style={{ color: palette.primary }}
                >
                  <Instagram className="w-4 h-4" />
                  <span>Seguir @psi_gorettaguiar no Instagram</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-black/10 aspect-square bg-black/5"
                >
                  <img
                    src={REAL_PHOTOS.officeGreenShirt}
                    alt="Dra. Gorett Aguiar em seu consultório"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3.5 text-white text-xs">
                    <p className="font-semibold">Consultório Presencial</p>
                    <p className="text-white/80">Boa Viagem · Recife - PE</p>
                  </div>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-black/10 aspect-square bg-black/5"
                >
                  <img
                    src={REAL_PHOTOS.doctoraliaPortrait}
                    alt="Psicóloga Gorett Aguiar - CRP 02/10724"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3.5 text-white text-xs">
                    <p className="font-semibold">Dra. Gorett Aguiar</p>
                    <p className="text-white/80">CRP 02/10724 · TCC</p>
                  </div>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-black/10 aspect-square bg-black/5"
                >
                  <img
                    src={REAL_PHOTOS.patientCare}
                    alt="Acompanhamento psicoterapêutico individual para jovens e adultos"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3.5 text-white text-xs">
                    <p className="font-semibold">Psicoterapia Individual</p>
                    <p className="text-white/80">Jovens e Adultos</p>
                  </div>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-black/10 aspect-square bg-black/5"
                >
                  <img
                    src={REAL_PHOTOS.natureLake}
                    alt="Saúde mental, equilíbrio emocional e qualidade de vida"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3.5 text-white text-xs">
                    <p className="font-semibold">@psi_gorettaguiar</p>
                    <p className="text-white/80">Saúde Mental e Bem-Estar</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            7. PERGUNTAS FREQUENTES (FAQ INTERATIVO EM ACORDEÃO)
        ====================================================================== */}
        <section
          className="py-16 sm:py-24 border-b border-black/10"
          style={{ backgroundColor: palette.bgSecondary }}
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 reveal-item">
              <p
                className="text-xs sm:text-sm font-semibold mb-2"
                style={{ color: palette.primary }}
              >
                Dúvidas Frequentes
              </p>
              <h2
                className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Informações sobre Consultas, Horários e Modalidades
              </h2>
              <p className="mt-3 text-base opacity-80">
                Tudo o que você precisa saber antes de agendar sua sessão presencial ou online.
              </p>
            </div>

            <div className="space-y-3.5 reveal-item">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{ backgroundColor: palette.bgMain }}
                    className="rounded-2xl border border-black/10 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 text-base sm:text-lg font-medium transition-opacity hover:opacity-80"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        style={{ color: palette.primary }}
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base opacity-85 leading-relaxed border-t border-black/5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            8. CHAMADA FINAL, DADOS REAIS DO GOOGLE E AGENDAMENTO WHATSAPP
        ====================================================================== */}
        <section id="contato" className="py-16 sm:py-24 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Coluna Esquerda: Endereço Real em Boa Viagem, Horários e Links Oficiais */}
              <div className="lg:col-span-6 space-y-6 reveal-item">
                <p
                  className="text-xs sm:text-sm font-semibold"
                  style={{ color: palette.primary }}
                >
                  Entre em Contato · Boa Viagem, Recife - PE &amp; Online
                </p>

                <h2
                  className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15]"
                  style={{ textWrap: 'balance' }}
                >
                  Deixe eu ajudar você a encontrar o melhor de si mesmo.
                </h2>

                <p className="text-base opacity-85 leading-relaxed">
                  Agende seu horário pelo WhatsApp <strong>{clinicConfig.phoneDisplay}</strong> para
                  atendimento presencial no <strong>{clinicConfig.addressTitle}</strong> ou sessão
                  online por videochamada.
                </p>

                {/* Quadro de Dados Reais da Página do Google / Consultório */}
                <div
                  className="p-6 rounded-2xl border border-black/10 space-y-4 text-sm"
                  style={{ backgroundColor: palette.bgSecondary }}
                >
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: palette.primary }}
                    />
                    <div>
                      <p className="font-semibold">{clinicConfig.addressTitle}</p>
                      <p className="opacity-80">{clinicConfig.addressLine}</p>
                      <p className="text-xs opacity-65">CEP: {clinicConfig.cep} · Brasil</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-black/10">
                    <Clock
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: palette.primary }}
                    />
                    <div>
                      <p className="font-semibold">Horário de Atendimento</p>
                      <p className="opacity-80 tabular-nums">
                        Segunda a Sexta: {clinicConfig.hoursWeekdays}
                      </p>
                      <p className="opacity-80 tabular-nums">
                        Sábado: {clinicConfig.hoursSaturday}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-black/10">
                    <CreditCard
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: palette.primary }}
                    />
                    <div>
                      <p className="font-semibold">Contato Direto e Pagamentos</p>
                      <p className="opacity-80 tabular-nums">
                        WhatsApp / Telefone: {clinicConfig.phoneDisplay} · E-mail:{' '}
                        {clinicConfig.email}
                      </p>
                      <p className="text-xs opacity-65 mt-0.5">
                        Atendimento particular · Aceita PIX, Transferência, Cartão de Débito e
                        Crédito
                      </p>
                    </div>
                  </div>
                </div>

                {/* Links Oficiais Clicáveis */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: palette.bgSecondary }}
                    className="p-4 rounded-xl border border-black/10 flex items-center justify-between gap-3 hover:opacity-85 transition-opacity"
                  >
                    <div className="flex items-center gap-2.5">
                      <Instagram className="w-5 h-5 shrink-0" style={{ color: palette.primary }} />
                      <div>
                        <p className="text-xs font-semibold">Instagram Oficial</p>
                        <p className="text-xs opacity-75">@psi_gorettaguiar</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 shrink-0 opacity-60" />
                  </a>

                  <a
                    href={GOOGLE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: palette.bgSecondary }}
                    className="p-4 rounded-xl border border-black/10 flex items-center justify-between gap-3 hover:opacity-85 transition-opacity"
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-5 h-5 shrink-0" style={{ color: palette.primary }} />
                      <div>
                        <p className="text-xs font-semibold">Página do Google</p>
                        <p className="text-xs opacity-75">Avaliações e Rota</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 shrink-0 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Coluna Direita: Formulário de Pré-Agendamento Direto para o WhatsApp (81) 98355-0457 */}
              <div className="lg:col-span-6 reveal-item">
                <form
                  onSubmit={handleScheduleFormSubmit}
                  noValidate
                  style={{ backgroundColor: palette.bgSecondary }}
                  className="p-7 sm:p-9 rounded-2xl border border-black/10 space-y-5"
                >
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold">
                      Agendar minha sessão pelo WhatsApp
                    </h3>
                    <p className="text-xs sm:text-sm opacity-75 mt-1">
                      Envie uma mensagem direta para o número oficial{' '}
                      <strong className="tabular-nums">{clinicConfig.phoneDisplay}</strong> da Dra.
                      Gorett Aguiar.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="patient-name"
                      className="block text-xs sm:text-sm font-medium mb-1.5"
                    >
                      Seu nome *
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      value={patientName}
                      onChange={(e) => {
                        setPatientName(e.target.value);
                        if (formError) setFormError('');
                      }}
                      placeholder="Como prefere ser chamado(a)?"
                      style={{ backgroundColor: palette.bgMain }}
                      className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-black/15 focus:outline-none"
                    />
                    {formError && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                        {formError}
                      </p>
                    )}
                  </div>

                  <div>
                    <span className="block text-xs sm:text-sm font-medium mb-1.5">
                      Modalidade de atendimento
                    </span>
                    <div
                      className="grid grid-cols-2 gap-2 p-1 rounded-xl border border-black/10"
                      style={{ backgroundColor: palette.bgMain }}
                    >
                      {(['Presencial (Boa Viagem)', 'Online'] as const).map((mod) => (
                        <button
                          key={mod}
                          type="button"
                          onClick={() => setPreferredModality(mod)}
                          style={
                            preferredModality === mod
                              ? { backgroundColor: palette.primary, color: '#FFFFFF' }
                              : undefined
                          }
                          className={`py-2.5 px-3 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap truncate ${
                            preferredModality === mod ? '' : 'opacity-75 hover:opacity-100'
                          }`}
                        >
                          {mod}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="preferred-shift"
                      className="block text-xs sm:text-sm font-medium mb-1.5"
                    >
                      Horário de preferência (Seg-Sex: 08:30-20:00 | Sáb: 09:00-12:00)
                    </label>
                    <select
                      id="preferred-shift"
                      value={preferredShift}
                      onChange={(e) =>
                        setPreferredShift(e.target.value as typeof preferredShift)
                      }
                      style={{ backgroundColor: palette.bgMain }}
                      className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-black/15 focus:outline-none"
                    >
                      <option value="Manhã (08:30-12:00)">Manhã (08:30 às 12:00)</option>
                      <option value="Tarde (13:00-17:30)">Tarde (13:00 às 17:30)</option>
                      <option value="Noite (18:00-20:00)">Noite (18:00 às 20:00)</option>
                      <option value="Sábado (09:00-12:00)">Sábado pela Manhã (09:00 às 12:00)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="patient-topic"
                      className="block text-xs sm:text-sm font-medium mb-1.5"
                    >
                      Demanda principal (Opcional)
                    </label>
                    <select
                      id="patient-topic"
                      value={patientTopic}
                      onChange={(e) => setPatientTopic(e.target.value)}
                      style={{ backgroundColor: palette.bgMain }}
                      className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-black/15 focus:outline-none"
                    >
                      <option value="Ansiedade, estresse e equilíbrio emocional">
                        Ansiedade, estresse e equilíbrio emocional
                      </option>
                      <option value="Alterações do humor, angústia ou depressão">
                        Alterações do humor, angústia ou depressão
                      </option>
                      <option value="Autoestima, autoconhecimento e superação da timidez">
                        Autoestima, autoconhecimento e superação da timidez
                      </option>
                      <option value="Dificuldades no relacionamento, família, luto ou separação">
                        Dificuldades no relacionamento, família, luto ou separação
                      </option>
                      <option value="Desejo conversar na primeira sessão (Anamnese TCC)">
                        Prefiro explicar durante a primeira sessão
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    style={{ backgroundColor: palette.primary }}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold text-white rounded-xl shadow-sm hover:opacity-95 transition-opacity whitespace-nowrap"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Enviar mensagem para {clinicConfig.phoneDisplay}</span>
                  </button>

                  {formSubmitted && (
                    <div
                      className="p-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-3"
                      style={{
                        backgroundColor: palette.bgMain,
                        borderColor: `${palette.primary}4D`,
                      }}
                    >
                      <span>Mensagem pronta! Clique ao lado caso a janela não tenha aberto:</span>
                      <a
                        href={buildWhatsappUrl(
                          `Olá, Dra. Gorett! Meu nome é ${patientName.trim()}. Gostaria de agendar minha sessão (${preferredModality} - ${preferredShift}).`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: palette.primary }}
                        className="font-semibold underline whitespace-nowrap shrink-0"
                      >
                        Abrir WhatsApp
                      </a>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =======================================================================
          RODAPÉ (FOOTER COM DADOS REAIS, LINKS E AVISO ÉTICO CFP / CVV 188)
      ======================================================================== */}
      <footer
        className="border-t border-black/10 pt-14 pb-10"
        style={{ backgroundColor: palette.bgSecondary }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-black/10">
            {/* Coluna 1: Identidade Oficial */}
            <div className="md:col-span-4 space-y-2.5">
              <p className="font-editorial text-2xl font-semibold">Gorett Aguiar | Psicóloga</p>
              <p className="text-sm font-semibold" style={{ color: palette.primary }}>
                {clinicConfig.crp} · Terapia Cognitivo-Comportamental
              </p>
              <p className="text-xs sm:text-sm opacity-75 leading-relaxed">
                Formada em Psicologia pela Universidade Federal do Ceará (UFC) · Especialização em
                Psicologia da Família e Realidade Social.
              </p>
              <p className="text-xs opacity-70 pt-1">
                {clinicConfig.addressTitle} — {clinicConfig.addressLine}, CEP {clinicConfig.cep}
              </p>
            </div>

            {/* Coluna 2: Links Diretos Reais */}
            <div className="md:col-span-4 space-y-2.5 text-sm">
              <p className="font-semibold">Canais Oficiais e Perfis</p>
              <ul className="space-y-2 opacity-85">
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Instagram className="w-4 h-4 shrink-0" style={{ color: palette.primary }} />
                    <span>Acompanhe no Instagram @psi_gorettaguiar</span>
                  </a>
                </li>
                <li>
                  <a
                    href={GOOGLE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <MapPin className="w-4 h-4 shrink-0" style={{ color: palette.primary }} />
                    <span>Página Oficial e Avaliações no Google</span>
                  </a>
                </li>
                <li>
                  <a
                    href={GOOGLE_MAPS_DIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Navigation className="w-4 h-4 shrink-0" style={{ color: palette.primary }} />
                    <span>Rota para Rua Ernesto de Paula Santos, 1172 (Sala 504)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={DOCTORALIA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <ExternalLink
                      className="w-4 h-4 shrink-0"
                      style={{ color: palette.primary }}
                    />
                    <span>Perfil Verificado no Doctoralia</span>
                  </a>
                </li>
                <li>
                  <a
                    href={buildWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline tabular-nums"
                  >
                    <Phone className="w-4 h-4 shrink-0" style={{ color: palette.primary }} />
                    <span>WhatsApp: {clinicConfig.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${clinicConfig.email}`}
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Mail className="w-4 h-4 shrink-0" style={{ color: palette.primary }} />
                    <span>{clinicConfig.email}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Aviso Legal Padrão CFP / CVV 188 */}
            <div className="md:col-span-4 space-y-2">
              <p className="text-sm font-semibold">
                Aviso Ético e Atendimento de Emergência (CFP)
              </p>
              <p className="text-xs opacity-75 leading-relaxed">
                Em conformidade com as normas do Conselho Federal de Psicologia (CFP), informamos
                que este site{' '}
                <strong>não oferece atendimento imediato de urgência ou emergência</strong>. Caso
                esteja enfrentando crise emocional aguda ou risco à vida, ligue gratuitamente para o{' '}
                <strong>CVV (Centro de Valorização da Vida) pelo telefone 188</strong> (atendimento
                24h e sigiloso) ou acione o <strong>SAMU (192)</strong>.
              </p>
              <p className="text-xs opacity-65 pt-2">
                Referência institucional adicional:{' '}
                <a
                  href={OFFICIAL_WIX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Acervo Gorett Aguiar ({clinicConfig.crp})
                </a>
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-70">
            <p>
              &copy; {new Date().getFullYear()} Gorett Aguiar · Psicóloga Clínica (
              {clinicConfig.crp}). Todos os direitos reservados.
            </p>
            <p>Boa Viagem, Recife - PE · Atendimento Presencial e Online</p>
          </div>
        </div>
      </footer>

      {/* =======================================================================
          BOTÃO FLUTUANTE DISCRETO DO WHATSAPP (81) 98355-0457
      ======================================================================== */}
      <a
        href={buildWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar sessão pelo WhatsApp"
        style={{ backgroundColor: palette.primary }}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full text-white shadow-md transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="text-xs font-semibold hidden sm:inline tabular-nums">
          WhatsApp {clinicConfig.phoneDisplay}
        </span>
      </a>
    </div>
  );
}
