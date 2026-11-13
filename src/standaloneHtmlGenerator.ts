/**
 * Gera o código completo (HTML, CSS e JavaScript em um único arquivo)
 * com fotos reais, avaliações reais do Google Meu Negócio / Doctoralia,
 * dados oficiais (CRP 02/10724, UFC, TCC, Lottus Consultórios Integrados - Boa Viagem, Recife - PE)
 * e paleta de cores oficial da Psicóloga Gorett Aguiar.
 */

export interface ClinicConfig {
  crp: string;
  approach: string;
  whatsappNumber: string;
  phoneDisplay: string;
  email: string;
  addressTitle: string;
  addressLine: string;
  cep: string;
  hoursWeekdays: string;
  hoursSaturday: string;
}

export const GOOGLE_PROFILE_URL =
  'https://www.google.com/search?q=psicologa&sxsrf=AKL5yDiaF4ky4Gi4J0fgdxJ4t84MUl3N9A:1794591748042&udm=local&lsack=BEz3au-PAvee5OUP37WnoQI#sv=CCYS5AEKXAoDdGJzElVscmY6ITJtNCExZTE1ITRtMiExNW0xITFzaGFzXzF3aGVlbGNoYWlyXzFhY2Nlc3NpYmxlXzFlbnRyYW5jZSEybTEhMWUyITJtMSExZTMhM3NJQUU9Cg4KAXESCXBzaWNvbG9nYQoHCgN1ZG0SABABGhBwdi0vZy8xMWxneGs4cHJjKiAKDS9nLzExbGd4azhwcmMiDwoJcHNpY29sb2dhEAIYAzI1Cglwc2ljb2xvZ2FI663RyLuygIAIWg8QABgAIglwc2ljb2xvZ2GSAQxwc3ljaG9sb2dpc3QYCiDi5K-WDA';

export const GOOGLE_MAPS_DIRECT_URL =
  'https://www.google.com/maps/search/?api=1&query=Rua+Ernesto+de+Paula+Santos+1172+Sala+504+Boa+Viagem+Recife+PE+51021-330';

export const INSTAGRAM_URL = 'https://www.instagram.com/psi_gorettaguiar/';

export const DOCTORALIA_URL = 'https://www.doctoralia.com.br/perfil/gorett-aguiar';

export const OFFICIAL_WIX_URL = 'https://gorettsa.wixsite.com/gorettaguiar';

// URLs permanentes das fotos reais da Dra. Gorett Aguiar para o arquivo HTML único exportável
export const EXTERNAL_REAL_PHOTOS = {
  officePortraitGreen:
    'https://static.wixstatic.com/media/4d7e6f_bdceeb35e3874778bd1648194998feb4~mv2.jpg',
  doctoraliaPortrait:
    'https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/26e3d9/26e3d9859c808d8610fc328dd09f1fee_large.jpg',
  psiLogoCard:
    'https://static.wixstatic.com/media/4d7e6f_780e65060a57487fb45037a216cc937c~mv2.jpg',
  therapySession:
    'https://static.wixstatic.com/media/11062b_18631521a1244211a1e7d329be6f365d~mv2.jpg',
  patientCare:
    'https://static.wixstatic.com/media/11062b_3532e83640a74fb4a70706c22ee88358~mv2.jpg',
  onlineSession:
    'https://static.wixstatic.com/media/6ddc90c56be6405d8ddcbfa97a6a1d9c.jpg',
  natureLake:
    'https://static.wixstatic.com/media/008e976d2e474faf829d403cb5aa3c25.jpg',
};

export function generateStandaloneHtml(config: ClinicConfig): string {
  const cleanPhone = config.whatsappNumber.replace(/\D/g, '') || '5581983550457';
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'Olá, Dra. Gorett! Encontrei seu site e gostaria de informações para agendar minha sessão de psicoterapia.'
  )}`;

  const themeColors = {
    bgMain: '#FAF9F6',
    bgSecondary: '#EEF3F7',
    primary: '#0277BD',
    primaryHover: '#01579B',
    accent: '#C89D7C',
    textMain: '#1E293B',
  };

  return `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gorett Aguiar | Psicóloga Clínica (${config.crp}) — Boa Viagem, Recife e Online</title>
  <meta name="description" content="Psicóloga Clínica Gorett Aguiar (${config.crp}). Formada pela UFC, Especialista em Psicologia da Família e Terapia Cognitivo-Comportamental (TCC). Atendimento presencial em Boa Viagem, Recife e Online." />

  <!-- Google Fonts: Cormorant Garamond (Títulos) & Plus Jakarta Sans (Textos e Botões) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            offwhite: '${themeColors.bgMain}',
            sand: '${themeColors.bgSecondary}',
            sage: '${themeColors.primary}',
            sageDark: '${themeColors.primaryHover}',
            terracotta: '${themeColors.accent}',
            charcoal: '${themeColors.textMain}',
          },
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
          }
        }
      }
    };
  </script>

  <!-- Lucide Icons via CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    body {
      background-color: ${themeColors.bgMain};
      color: ${themeColors.textMain};
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    h1, h2, h3, .font-editorial {
      font-family: 'Cormorant Garamond', Georgia, serif;
    }
    .reveal {
      opacity: 0;
      transform: translateY(22px);
      transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
    @media (prefers-reduced-motion: reduce) {
      .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
    }
  </style>
</head>
<body class="bg-offwhite text-charcoal antialiased selection:bg-sage/20">

  <!-- 1. CABEÇALHO (NAVBAR FIXO E DISCRETO) -->
  <header class="sticky top-0 z-40 bg-offwhite/95 backdrop-blur-md border-b border-charcoal/10">
    <div class="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
      <a href="#" class="font-editorial text-xl sm:text-2xl font-semibold tracking-tight text-charcoal whitespace-nowrap shrink-0">
        Gorett Aguiar | Psicóloga
      </a>

      <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-charcoal/80">
        <a href="#sobre" class="hover:text-sage transition-colors whitespace-nowrap shrink-0">Sobre Mim</a>
        <a href="#atendimento" class="hover:text-sage transition-colors whitespace-nowrap shrink-0">Atendimento</a>
        <a href="#avaliacoes" class="hover:text-sage transition-colors whitespace-nowrap shrink-0">Avaliações</a>
        <a href="#contato" class="hover:text-sage transition-colors whitespace-nowrap shrink-0">Contato</a>
      </nav>

      <div class="flex items-center gap-3 shrink-0">
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"
           class="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-sage hover:bg-sageDark rounded-lg transition-colors whitespace-nowrap shrink-0">
          Agendar Consulta
        </a>
        <button id="mobile-menu-btn" aria-label="Abrir menu" class="md:hidden p-2.5 rounded-lg text-charcoal hover:bg-sand transition-colors">
          <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
      </div>
    </div>

    <div id="mobile-menu" class="hidden md:hidden bg-offwhite border-b border-charcoal/10 px-5 pt-3 pb-6 space-y-3">
      <a href="#sobre" class="mobile-link block py-2.5 text-base font-medium text-charcoal hover:text-sage">Sobre Mim</a>
      <a href="#atendimento" class="mobile-link block py-2.5 text-base font-medium text-charcoal hover:text-sage">Atendimento</a>
      <a href="#avaliacoes" class="mobile-link block py-2.5 text-base font-medium text-charcoal hover:text-sage">Avaliações</a>
      <a href="#contato" class="mobile-link block py-2.5 text-base font-medium text-charcoal hover:text-sage">Contato</a>
      <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"
         class="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-sage hover:bg-sageDark rounded-xl transition-colors">
        Agendar Consulta (${config.phoneDisplay})
      </a>
    </div>
  </header>

  <main>
    <!-- 2. SEÇÃO HERO (COM FOTOS REAIS E DADOS OFICIAIS) -->
    <section class="relative overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-charcoal/10">
      <div class="max-w-6xl mx-auto px-5 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-7 space-y-6 reveal">
            <p class="text-xs sm:text-sm font-medium text-sage tracking-wide">
              Psicóloga Clínica &middot; ${config.crp} &middot; Terapia Cognitivo-Comportamental (TCC)
            </p>
            <h1 class="font-editorial text-4xl sm:text-5xl lg:text-[3.35rem] font-semibold text-charcoal leading-[1.13]" style="text-wrap: balance;">
              Um espaço seguro para você se reencontrar, cuidar da sua saúde emocional e construir uma vida mais leve.
            </h1>
            <p class="text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-2xl">
              Como psicóloga profissional e comprometida há mais de 24 anos, o seu bem-estar e saúde mental são a minha prioridade. Acompanho jovens e adultos na superação de ansiedade, autoconhecimento e transições de vida, presencialmente em Boa Viagem (Recife) e online.
            </p>
            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-semibold text-white bg-sage hover:bg-sageDark rounded-xl shadow-sm transition-colors whitespace-nowrap">
                <i data-lucide="message-circle" class="w-5 h-5"></i>
                Agendar minha primeira sessão
              </a>
              <a href="#sobre"
                 class="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-charcoal hover:text-sage bg-sand hover:bg-sand/80 rounded-xl transition-colors whitespace-nowrap">
                Conhecer minha história
                <i data-lucide="arrow-down" class="w-4 h-4"></i>
              </a>
            </div>
            <p class="text-xs sm:text-sm text-charcoal/70">
              ${config.addressTitle} &middot; Boa Viagem, Recife - PE &middot; WhatsApp: ${config.phoneDisplay}
            </p>
          </div>

          <div class="lg:col-span-5 relative reveal">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              <div class="overflow-hidden rounded-[2rem] border border-charcoal/10 bg-sand aspect-[4/4] shadow-sm">
                <!-- FOTO REAL DA PSICÓLOGA GORETT AGUIAR EM SEU CONSULTÓRIO -->
                <img
                  src="${EXTERNAL_REAL_PHOTOS.officePortraitGreen}"
                  alt="Psicóloga Gorett Aguiar (${config.crp}) em seu consultório"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="mt-4 flex items-center justify-between text-xs text-charcoal/75 px-1">
                <span>Dra. Gorett Aguiar &middot; Formada pela UFC</span>
                <span>&middot;</span>
                <span>${config.crp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. COMO POSSO TE AJUDAR (ESPECIALIDADES TCC) -->
    <section class="py-16 sm:py-24 bg-sand/70 border-b border-charcoal/10">
      <div class="max-w-6xl mx-auto px-5 sm:px-8">
        <div class="max-w-2xl mb-12 reveal">
          <p class="text-xs sm:text-sm font-medium text-sage mb-2">Terapia Cognitivo-Comportamental (TCC)</p>
          <h2 class="font-editorial text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
            Como posso te ajudar na sua caminhada
          </h2>
          <p class="mt-3 text-base text-charcoal/75 leading-relaxed">
            A proposta da terapia é contribuir para o desenvolvimento pessoal do paciente, ajudando-o a melhorar os seus aspectos emocionais, sua saúde mental e qualidade de vida.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <article class="bg-offwhite p-7 sm:p-8 rounded-2xl border border-charcoal/10 flex flex-col justify-between reveal">
            <div>
              <div class="w-11 h-11 rounded-xl bg-sage/10 text-sage flex items-center justify-center mb-6">
                <i data-lucide="wind" class="w-5 h-5"></i>
              </div>
              <h3 class="font-editorial text-2xl font-semibold text-charcoal mb-3">
                01. Ansiedade, Angústia e Estresse
              </h3>
              <p class="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Ferramentas práticas da Terapia Cognitivo-Comportamental e acolhimento para lidar com transtornos de ansiedade, crises de angústia, alterações de humor, depressão e estresse.
              </p>
            </div>
            <p class="mt-6 pt-4 border-t border-charcoal/10 text-xs text-charcoal/65">
              Transtornos de ansiedade &middot; Humor &middot; Equilíbrio
            </p>
          </article>

          <article class="bg-offwhite p-7 sm:p-8 rounded-2xl border border-charcoal/10 flex flex-col justify-between reveal">
            <div>
              <div class="w-11 h-11 rounded-xl bg-sage/10 text-sage flex items-center justify-center mb-6">
                <i data-lucide="compass" class="w-5 h-5"></i>
              </div>
              <h3 class="font-editorial text-2xl font-semibold text-charcoal mb-3">
                02. Autoconhecimento e Autoestima
              </h3>
              <p class="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Fortalecimento emocional para superar a timidez, insegurança e autocrítica, desenvolvendo atitudes positivas e clareza na tomada de decisões.
              </p>
            </div>
            <p class="mt-6 pt-4 border-t border-charcoal/10 text-xs text-charcoal/65">
              Autoestima &middot; Superação da timidez &middot; Autonomia
            </p>
          </article>

          <article class="bg-offwhite p-7 sm:p-8 rounded-2xl border border-charcoal/10 flex flex-col justify-between reveal">
            <div>
              <div class="w-11 h-11 rounded-xl bg-sage/10 text-sage flex items-center justify-center mb-6">
                <i data-lucide="heart-handshake" class="w-5 h-5"></i>
              </div>
              <h3 class="font-editorial text-2xl font-semibold text-charcoal mb-3">
                03. Relacionamentos, Luto e Família
              </h3>
              <p class="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Com especialização em Psicologia da Família e Realidade Social, ofereço suporte ético para enfrentar conflitos afetivos, separações, lutos e circunstâncias desafiadoras.
              </p>
            </div>
            <p class="mt-6 pt-4 border-t border-charcoal/10 text-xs text-charcoal/65">
              Psicologia da Família &middot; Luto &middot; Separações
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- 4. SOBRE A PSICÓLOGA GORETT AGUIAR (HISTÓRIA REAL E FOTOS REAIS) -->
    <section id="sobre" class="py-16 sm:py-24 scroll-mt-16 border-b border-charcoal/10">
      <div class="max-w-6xl mx-auto px-5 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-5 space-y-4 reveal">
            <div class="overflow-hidden rounded-2xl border border-charcoal/10 bg-sand aspect-square">
              <img
                src="${EXTERNAL_REAL_PHOTOS.doctoraliaPortrait}"
                alt="Retrato oficial da Psicóloga Gorett Aguiar (${config.crp})"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="overflow-hidden rounded-xl border border-charcoal/10 bg-sand">
              <img
                src="${EXTERNAL_REAL_PHOTOS.psiLogoCard}"
                alt="Cartão Oficial Gorett Aguiar Psicóloga ${config.crp}"
                class="w-full h-36 object-cover"
              />
            </div>
          </div>

          <div class="lg:col-span-7 space-y-6 reveal">
            <p class="text-xs sm:text-sm font-medium text-sage">Minha História e Formação</p>
            <h2 class="font-editorial text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
              Gorett Aguiar &mdash; Mais de 24 anos dedicados à Psicologia Clínica
            </h2>
            <p class="text-base text-charcoal/85 leading-relaxed">
              Sou formada em Psicologia há mais de 24 anos pela <strong>Universidade Federal do Ceará (UFC)</strong> e possuo <strong>Especialização em Psicologia da Família e Realidade Social</strong>. Trabalho com foco na <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, realizando atendimento individual de jovens e adultos de forma presencial em Recife e online.
            </p>
            <p class="text-base text-charcoal/80 leading-relaxed">
              Atuar na área clínica faz-me sentir realizada como profissional. Dedico-me ao bem-estar dos meus pacientes e forneço as ferramentas necessárias para enfrentar as circunstâncias mais complexas e desafiadoras da vida, oferecendo a atenção, a escuta ética e o cuidado merecido.
            </p>

            <div class="p-5 sm:p-6 rounded-2xl bg-sand border border-charcoal/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p class="text-xs text-charcoal/60">Registro e Formação</p>
                <p class="font-editorial text-xl font-semibold text-charcoal mt-0.5">${config.crp}</p>
                <p class="text-xs text-charcoal/75 mt-1">Graduada pela UFC &middot; Especialista em Psicologia da Família &middot; TCC</p>
              </div>
              <div>
                <p class="text-xs text-charcoal/60">Consultório e Acessibilidade</p>
                <p class="font-editorial text-xl font-semibold text-charcoal mt-0.5">${config.addressTitle}</p>
                <p class="text-xs text-charcoal/75 mt-1">${config.addressLine} &middot; Entrada acessível no Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. MODALIDADES DE ATENDIMENTO (PRESENCIAL EM BOA VIAGEM E ONLINE) -->
    <section id="atendimento" class="py-16 sm:py-24 bg-sand/70 border-b border-charcoal/10 scroll-mt-16">
      <div class="max-w-6xl mx-auto px-5 sm:px-8">
        <div class="max-w-2xl mb-12 reveal">
          <p class="text-xs sm:text-sm font-medium text-sage mb-2">Serviços que Ofereço</p>
          <h2 class="font-editorial text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
            Modalidades de Atendimento: Presencial em Recife e Online
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-offwhite rounded-2xl border border-charcoal/10 overflow-hidden flex flex-col justify-between reveal">
            <div>
              <img src="${EXTERNAL_REAL_PHOTOS.onlineSession}" alt="Atendimento Psicológico Online" class="w-full h-52 object-cover border-b border-charcoal/10" />
              <div class="p-7 sm:p-9 space-y-4">
                <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-charcoal">
                  Atendimento Online &mdash; Assistência de Qualidade
                </h3>
                <p class="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                  A sessão se dá no mesmo modelo presencial, porém mediada pela tecnologia. É indicado que o paciente esteja em um local tranquilo e privado, conectado à internet com smartphone, tablet ou notebook, preferencialmente com fones de ouvido e certificado de que não será interrompido.
                </p>
              </div>
            </div>
            <div class="px-7 sm:px-9 pb-7 pt-4 border-t border-charcoal/10">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-semibold text-sage hover:text-sageDark">
                Agendar Teleconsulta pelo WhatsApp <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

          <div class="bg-offwhite rounded-2xl border border-charcoal/10 overflow-hidden flex flex-col justify-between reveal">
            <div>
              <img src="${EXTERNAL_REAL_PHOTOS.therapySession}" alt="Psicoterapia Presencial em Boa Viagem, Recife" class="w-full h-52 object-cover border-b border-charcoal/10" />
              <div class="p-7 sm:p-9 space-y-4">
                <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-charcoal">
                  Atendimento Presencial &mdash; Boa Viagem, Recife
                </h3>
                <p class="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                  Realizado no <strong>${config.addressTitle}</strong> (${config.addressLine}, CEP ${config.cep}). Espaço acolhedor, climatizado e com entrada acessível para cadeira de rodas. Horários de Seg a Sex das ${config.hoursWeekdays} e Sábado das ${config.hoursSaturday}.
                </p>
              </div>
            </div>
            <div class="px-7 sm:px-9 pb-7 pt-4 border-t border-charcoal/10 flex flex-wrap items-center justify-between gap-4">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-semibold text-sage hover:text-sageDark">
                Agendar Presencial <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
              </a>
              <a href="${GOOGLE_PROFILE_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal/75 hover:text-charcoal">
                <i data-lucide="map-pin" class="w-3.5 h-3.5"></i> Ver no Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. AVALIAÇÕES REAIS DO GOOGLE MEU NEGÓCIO E DOCTORALIA -->
    <section id="avaliacoes" class="py-16 sm:py-24 scroll-mt-16 border-b border-charcoal/10">
      <div class="max-w-6xl mx-auto px-5 sm:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <p class="text-xs sm:text-sm font-medium text-sage mb-2">Depoimentos Reais de Pacientes</p>
            <h2 class="font-editorial text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
              Avaliações e Feedbacks Verificados
            </h2>
            <p class="mt-2 text-sm sm:text-base text-charcoal/75 max-w-xl">
              Depoimentos reais retirados do Google Meu Negócio e opiniões verificadas de pacientes atendidos.
            </p>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-right">
              <div class="flex items-center gap-1 text-terracotta">
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                <span class="ml-1.5 text-sm font-semibold text-charcoal tabular-nums">5.0</span>
              </div>
              <p class="text-xs text-charcoal/65">Google Meu Negócio &amp; Doctoralia</p>
            </div>
            <a href="${GOOGLE_PROFILE_URL}" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-charcoal bg-sand hover:bg-sand/70 border border-charcoal/10 rounded-xl transition-colors whitespace-nowrap">
              Ver Página do Google
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <blockquote class="bg-sand/60 p-7 rounded-2xl border border-charcoal/10 flex flex-col justify-between reveal">
            <p class="text-sm sm:text-base text-charcoal/85 leading-relaxed italic">
              "Profissional séria e comprometida! Indico o atendimento excelente!"
            </p>
            <footer class="mt-6 pt-4 border-t border-charcoal/10 text-xs text-charcoal/70">
              <strong class="font-semibold text-charcoal">Suzana Karine</strong> &middot; Avaliação no Google Meu Negócio
            </footer>
          </blockquote>

          <blockquote class="bg-sand/60 p-7 rounded-2xl border border-charcoal/10 flex flex-col justify-between reveal">
            <p class="text-sm sm:text-base text-charcoal/85 leading-relaxed italic">
              "Profissional super competente, atenciosa, acolhedora, paciente. Obtive resultados positivos com o tratamento. Recomendo!"
            </p>
            <footer class="mt-6 pt-4 border-t border-charcoal/10 text-xs text-charcoal/70">
              <strong class="font-semibold text-charcoal">Mariana L.</strong> &middot; Opinião Verificada &middot; Lottus Consultórios Integrados
            </footer>
          </blockquote>

          <blockquote class="bg-sand/60 p-7 rounded-2xl border border-charcoal/10 flex flex-col justify-between reveal">
            <p class="text-sm sm:text-base text-charcoal/85 leading-relaxed italic">
              "Excelente profissional! Muito atenciosa, dedicada, competente. Ótimo atendimento! Deixa a pessoa à vontade. Recomendo!"
            </p>
            <footer class="mt-6 pt-4 border-t border-charcoal/10 text-xs text-charcoal/70">
              <strong class="font-semibold text-charcoal">L. A. / Larissa Araújo &amp; Shirlene Vieira</strong> &middot; Google &amp; Doctoralia
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- 7. PERGUNTAS FREQUENTES (FAQ INTERATIVO) -->
    <section class="py-16 sm:py-24 bg-sand/70 border-b border-charcoal/10">
      <div class="max-w-4xl mx-auto px-5 sm:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 reveal">
          <p class="text-xs sm:text-sm font-medium text-sage mb-2">Dúvidas Comuns</p>
          <h2 class="font-editorial text-3xl sm:text-4xl font-semibold text-charcoal">
            Perguntas Frequentes
          </h2>
        </div>

        <div class="space-y-3 reveal">
          <div class="bg-offwhite rounded-2xl border border-charcoal/10 overflow-hidden">
            <button class="faq-btn w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-medium text-charcoal hover:text-sage transition-colors">
              <span>Como funciona a primeira sessão?</span>
              <i data-lucide="chevron-down" class="w-5 h-5 shrink-0 transition-transform duration-200"></i>
            </button>
            <div class="faq-content hidden px-6 pb-5 text-sm sm:text-base text-charcoal/80 leading-relaxed">
              A primeira sessão envolve o acolhimento inicial e anamnese psicológica dentro da abordagem da Terapia Cognitivo-Comportamental (TCC). Conversaremos sobre o que motivou sua busca pela psicoterapia, suas metas e alinharemos horários e frequência.
            </div>
          </div>

          <div class="bg-offwhite rounded-2xl border border-charcoal/10 overflow-hidden">
            <button class="faq-btn w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-medium text-charcoal hover:text-sage transition-colors">
              <span>Qual o horário de funcionamento e onde fica o consultório?</span>
              <i data-lucide="chevron-down" class="w-5 h-5 shrink-0 transition-transform duration-200"></i>
            </button>
            <div class="faq-content hidden px-6 pb-5 text-sm sm:text-base text-charcoal/80 leading-relaxed">
              Os atendimentos ocorrem de Segunda a Sexta-feira das ${config.hoursWeekdays} e aos Sábados das ${config.hoursSaturday}. O consultório presencial fica no ${config.addressTitle}, na ${config.addressLine} (CEP ${config.cep}).
            </div>
          </div>

          <div class="bg-offwhite rounded-2xl border border-charcoal/10 overflow-hidden">
            <button class="faq-btn w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-medium text-charcoal hover:text-sage transition-colors">
              <span>O atendimento online tem a mesma eficácia do presencial?</span>
              <i data-lucide="chevron-down" class="w-5 h-5 shrink-0 transition-transform duration-200"></i>
            </button>
            <div class="faq-content hidden px-6 pb-5 text-sm sm:text-base text-charcoal/80 leading-relaxed">
              Sim. A sessão online se dá no mesmo modelo presencial, porém mediada pela tecnologia e regulamentada pelo CFP. Recomenda-se estar em local tranquilo e privado, conectado à internet pelo celular, tablet ou notebook, preferencialmente utilizando fones de ouvido.
            </div>
          </div>

          <div class="bg-offwhite rounded-2xl border border-charcoal/10 overflow-hidden">
            <button class="faq-btn w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-medium text-charcoal hover:text-sage transition-colors">
              <span>Vocês atendem por convênio e quais as formas de pagamento?</span>
              <i data-lucide="chevron-down" class="w-5 h-5 shrink-0 transition-transform duration-200"></i>
            </button>
            <div class="faq-content hidden px-6 pb-5 text-sm sm:text-base text-charcoal/80 leading-relaxed">
              Os atendimentos são realizados na modalidade particular (com emissão de recibo para solicitação de reembolso junto ao seu plano de saúde). Aceitamos Cartão de Crédito, Cartão de Débito, PIX, Transferência Bancária e Depósito.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. CHAMADA FINAL E CONTATO -->
    <section id="contato" class="py-16 sm:py-24 scroll-mt-16">
      <div class="max-w-4xl mx-auto px-5 sm:px-8 text-center reveal">
        <p class="text-xs sm:text-sm font-medium text-sage mb-3">${config.addressTitle} &middot; Recife - PE &amp; Online</p>
        <h2 class="font-editorial text-3xl sm:text-5xl font-semibold text-charcoal leading-tight" style="text-wrap: balance;">
          Entre em contato e deixe eu ajudar você a encontrar o melhor de si mesmo.
        </h2>
        <p class="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
          ${config.addressLine} &mdash; CEP ${config.cep}<br/>
          Horário: Segunda a Sexta (${config.hoursWeekdays}) &middot; Sábado (${config.hoursSaturday})
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"
             class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-sage hover:bg-sageDark rounded-xl shadow-sm transition-colors">
            <i data-lucide="message-circle" class="w-5 h-5"></i>
            Agendar pelo WhatsApp ${config.phoneDisplay}
          </a>
          <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer"
             class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-charcoal bg-sand hover:bg-sand/80 rounded-xl transition-colors">
            <i data-lucide="instagram" class="w-4 h-4 text-terracotta"></i>
            @psi_gorettaguiar
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-sand border-t border-charcoal/10 pt-14 pb-10">
    <div class="max-w-6xl mx-auto px-5 sm:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-charcoal/10">
        <div class="space-y-2">
          <p class="font-editorial text-2xl font-semibold text-charcoal">Gorett Aguiar | Psicóloga</p>
          <p class="text-sm text-charcoal/80">${config.crp} &middot; ${config.approach}</p>
          <p class="text-xs text-charcoal/70 pt-1">${config.addressTitle} &mdash; ${config.addressLine}</p>
          <p class="text-xs text-charcoal/70">E-mail: ${config.email} &middot; Tel: ${config.phoneDisplay}</p>
        </div>

        <div class="space-y-2.5 text-sm">
          <p class="font-semibold text-charcoal">Canais Oficiais</p>
          <p>
            <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-charcoal/80 hover:text-sage transition-colors">
              <i data-lucide="instagram" class="w-4 h-4"></i>
              Acompanhe conteúdos diários no Instagram @psi_gorettaguiar
            </a>
          </p>
          <p>
            <a href="${GOOGLE_PROFILE_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-charcoal/80 hover:text-sage transition-colors">
              <i data-lucide="map-pin" class="w-4 h-4"></i>
              Perfil Oficial e Localização no Google
            </a>
          </p>
          <p>
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-charcoal/80 hover:text-sage transition-colors">
              <i data-lucide="phone" class="w-4 h-4"></i>
              WhatsApp: ${config.phoneDisplay}
            </a>
          </p>
        </div>

        <div class="space-y-2 text-xs text-charcoal/75 leading-relaxed">
          <p class="font-semibold text-sm text-charcoal">Aviso Ético e Legal (CFP)</p>
          <p>
            Atenção: Este site não oferece atendimento imediato de urgência ou emergência psicológica. Caso você esteja passando por uma crise aguda ou risco à vida, ligue gratuitamente para o <strong>CVV (Centro de Valorização da Vida) pelo número 188</strong> (disponível 24h) ou procure o serviço de saúde mais próximo (SAMU 192).
          </p>
        </div>
      </div>

      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal/60">
        <p>&copy; ${new Date().getFullYear()} Gorett Aguiar &middot; Psicóloga Clínica (${config.crp}). Todos os direitos reservados.</p>
        <p>Boa Viagem, Recife - PE &middot; Atendimento Presencial e Online</p>
      </div>
    </div>
  </footer>

  <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"
     aria-label="Agendar consulta pelo WhatsApp"
     class="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-sage hover:bg-sageDark text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5">
    <i data-lucide="message-circle" class="w-5 h-5"></i>
    <span class="text-xs font-semibold hidden sm:inline">WhatsApp ${config.phoneDisplay}</span>
  </a>

  <script>
    lucide.createIcons();

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
      document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });
    }

    document.querySelectorAll('.faq-btn').forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('svg');
        const isOpen = !content.classList.contains('hidden');
        document.querySelectorAll('.faq-content').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.faq-btn svg').forEach(svg => svg.classList.remove('rotate-180'));
        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    });

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach(el => observer.observe(el));
  </script>
</body>
</html>`;
}
