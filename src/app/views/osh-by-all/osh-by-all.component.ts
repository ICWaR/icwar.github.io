import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export const OSH_CONFIG = {
  registerUrl: 'https://receipts.iisc.ac.in/form/v1/conferences/IISc-conf-one-sustainable-health-2026/registration',
  submitUrl: 'https://forms.gle/Eki7qajfQHaXnNM3A',
  brochurePdf: '/assets/assets/brochures/OSH_by_all_2026_Brochure_IISc.pdf',
  submitDeadline: '2026-11-04T23:55:00+05:30',
  registrationDeadline: '2026-11-13T17:00:00+05:30',
  eventEnd: '2026-11-19T17:30:00+05:30'
} as const;

@Component({
  selector: 'app-osh-by-all',
  templateUrl: './osh-by-all.component.html',
  styleUrls: ['./osh-by-all.component.scss']
})
export class OshByAllComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly cfg = OSH_CONFIG;
  readonly brochureUrl: SafeResourceUrl;
  menuOpen = false;
  banner = '';
  countdown = '';
  submissionClosed = false;
  registrationClosed = false;
  eventEnded = false;
  private timerId: ReturnType<typeof setInterval> | null = null;

  readonly nav = [
    { id: 'about', label: 'About OSH' },
    { id: 'pillars', label: 'Focus areas' },
    { id: 'program', label: 'Programme' },
    { id: 'brochure', label: 'Brochure' },
    { id: 'students', label: 'Startup ideas' },
    { id: 'team', label: 'Committee' },
    { id: 'contact', label: 'Contact' }
  ];

  readonly dimensions = [
    { title: 'Human health', description: 'Disease prevention, wellbeing and healthcare innovation.', color: '#7a3b94' },
    { title: 'Animal health', description: 'Livestock, veterinary care and zoonoses.', color: '#1b6fb5' },
    { title: 'Plant health', description: 'Crops, soil and sustainable food systems.', color: '#2e9b3f' },
    { title: 'Environmental health', description: 'Water, climate and ecosystems.', color: '#12808a' }
  ];

  readonly pillars = [
    { title: 'Science and technology', description: 'AI, data platforms, disease surveillance, antimicrobial resistance and water security.' },
    { title: 'International collaboration', description: 'Partnerships across India, France, Europe, Africa, South Asia and East Asia.' },
    { title: 'Governance and policy', description: 'Action-oriented dialogue with governments, WHO and global institutions.' },
    { title: 'Youth and society', description: 'Empowering researchers, startups, students and civil society.' }
  ];

  readonly audiences = [
    'Government leaders and policymakers',
    'Scientists and academia',
    'Healthcare and veterinary professionals',
    'Environmental experts',
    'Technology leaders and AI innovators',
    'Startups and entrepreneurs',
    'International agencies and NGOs',
    'Students and young researchers'
  ];

  readonly outcomes = [
    'Policy recommendations and international research collaborations',
    'Potential collaborations in water security, AMR and zoonotic diseases',
    'One Health data platforms and regional knowledge exchange',
    'Indo-French scientific partnerships',
    'Bengaluru as a long-term OSH innovation hub'
  ];

  readonly blocks = ['One Vision', 'One Connect', 'One Collaboration', 'One Impact', 'One Future'];

  readonly days = [
    {
      date: 'Tuesday, 17 November 2026', iso: '2026-11-17', color: '#7a3b94',
      event: 'Bengaluru Tech Summit 2026', time: '9:30 AM to 5:30 PM',
      venue: 'Bengaluru International Exhibition Centre (BIEC), Bengaluru',
      details: ['OSH by all 2026 launch and announcement.']
    },
    {
      date: 'Wednesday, 18 November 2026', iso: '2026-11-18', color: '#2e9b3f',
      event: 'OSH by all Bengaluru 2026', time: '9:30 AM to 5:30 PM',
      venue: 'Indian Institute of Science (IISc), Bengaluru',
      details: ['Inauguration and keynote sessions.', 'Exhibition showcase.']
    },
    {
      date: 'Thursday, 19 November 2026', iso: '2026-11-19', color: '#1b6fb5',
      event: 'OSH by all Bengaluru 2026', time: '9:30 AM to 5:30 PM',
      venue: 'Indian Institute of Science (IISc), Bengaluru',
      details: ['Panel discussions and talks.']
    }
  ];

  readonly deadlines = [
    { id: 'submit', label: 'Submit a startup idea', date: '4 November 2026', note: '11:55 PM IST | Free' },
    { id: 'register', label: 'Register to attend', date: '13 November 2026', note: '5:00 PM IST | Fee applies' },
    { id: 'poster', label: 'Poster presentations', date: '18 November 2026', note: 'Morning | Printed poster' },
    { id: 'oral', label: 'Oral presentations', date: '19 November 2026', note: '3-minute talk + 2-minute Q&A' }
  ];

  readonly formats = [
    { title: 'Poster presentation', format: 'Bring a printed poster on the morning of the presentation.', presenters: 'The full team, up to 4 members.', awards: 'Top 3 posters.' },
    { title: 'Oral presentation', format: 'PowerPoint presentation: 3 minutes, followed by 2 minutes of questions and answers.', presenters: 'One team member only.', awards: 'Top 3 presentations.' }
  ];

  readonly steps = [
    { title: '1. Register', description: 'Every team member registers individually. Pitching teams must register before applying.' },
    { title: '2. Apply', description: 'After all members register, one member submits a single application for the team. Idea submission is free.' },
    { title: '3. Selection', description: 'Entries are evaluated and assigned to oral or poster presentations. Selected teams are notified by email.' },
    { title: '4. Present', description: 'Present the selected idea in the format assigned by the organisers.' }
  ];

  readonly committee = [
    { name: 'Utpal Tatu', affiliation: 'ICWaR, IISc, India' },
    { name: 'Praveen C. Ramamurthy', affiliation: 'ICWaR, IISc, India' },
    { name: 'Lakshminarayana Rao', affiliation: 'ICWaR, IISc, India' },
    { name: 'Neela Tatu', affiliation: 'OHV Co-Foundation, India' },
    { name: 'Brian B. Rudkin', affiliation: 'OSH4A Foundation; University of Lyon 1, France' },
    { name: 'Ole Petter Ottersen', affiliation: 'University of Oslo, Norway' },
    { name: 'Anne-Françoise Berthon', affiliation: 'ANSES, France' },
    { name: 'Claus Haugaard Sørensen', affiliation: 'Former Director-General, European Commission' }
  ];

  constructor(private readonly sanitizer: DomSanitizer) {
    this.brochureUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${OSH_CONFIG.brochurePdf}#view=FitH`);
  }

  ngOnInit(): void {
    this.updateClock();
    this.timerId = setInterval(() => this.updateClock(), 60000);
  }

  ngAfterViewInit(): void {
    const id = window.location.hash.slice(1);
    if (id) window.setTimeout(() => this.go(id), 250);
  }

  ngOnDestroy(): void {
    if (this.timerId !== null) clearInterval(this.timerId);
  }

  private updateClock(now = new Date()): void {
    const remaining = new Date(OSH_CONFIG.submitDeadline).getTime() - now.getTime();
    this.eventEnded = now.getTime() >= new Date(OSH_CONFIG.eventEnd).getTime();
    this.submissionClosed = remaining <= 0;
    this.registrationClosed = now.getTime() >= new Date(OSH_CONFIG.registrationDeadline).getTime();

    if (this.eventEnded) {
      this.countdown = 'Event concluded';
      this.banner = 'Thank you for your interest in One Sustainable Health by all 2026.';
      return;
    }

    if (this.submissionClosed) {
      this.countdown = 'Submissions closed';
      this.banner = this.registrationClosed
        ? 'Conference registration has closed. The IISc programme takes place on 18-19 November 2026.'
        : 'Startup idea submissions are closed. Conference registration remains open until 13 November 2026 at 5:00 PM IST.';
      return;
    }

    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    this.countdown = `${days}d ${hours}h ${minutes}m`;
    this.banner = `Startup idea submissions close on 4 November 2026 at 11:55 PM IST (${this.countdown} remaining). Conference registration closes on 13 November at 5:00 PM IST.`;
  }

  go(id: string, event?: Event): void {
    event?.preventDefault();
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
