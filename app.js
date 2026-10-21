'use strict';

const $ = (selector, context = document) =>
  context.querySelector(selector);

const $$ = (selector, context = document) =>
  [...context.querySelectorAll(selector)];

/* PHOTO FILENAMES — no folder prefix */
const photos = [
  {
    src: 'certificates.jpg',
    title: 'Celebrating shared learning',
    category: 'recognition',
    label: 'Recognition',
    alt: 'A group of educators holding their certificates at the capacity-building event'
  },
  {
    src: 'speaker.jpg',
    title: 'Ideas that inspire new possibilities',
    category: 'learning',
    label: 'Learning sessions',
    alt: 'An educator speaking about project-based learning with a presentation on screen'
  },
  {
    src: 'community.jpg',
    title: 'One community, a shared purpose',
    category: 'community',
    label: 'Our community',
    alt: 'Educators gathered together on stage during the AI4E activity'
  },
  {
    src: 'educators.jpg',
    title: 'Growing together as educators',
    category: 'community',
    label: 'Our community',
    alt: 'Workshop participants and facilitators posing for a group photograph'
  },
  {
    src: 'facilitators.jpg',
    title: 'People behind the possibilities',
    category: 'learning',
    label: 'Learning sessions',
    alt: 'Program facilitators and educators standing together at the event'
  },
  {
    src: 'recognition.jpg',
    title: 'A milestone worth sharing',
    category: 'recognition',
    label: 'Recognition',
    alt: 'Participants proudly displaying their certificates after the learning sessions'
  },
  {
    src: 'learning-together.jpg',
    title: 'Stronger connections, brighter ideas',
    category: 'community',
    label: 'Our community',
    alt: 'A group of educators and school leaders at the capacity-building gathering'
  },
  {
    src: 'workshop.jpg',
    title: 'Learning beyond the classroom',
    category: 'learning',
    label: 'Learning sessions',
    alt: 'Participants gathered in the workshop venue with laptops and learning materials'
  },
  {
    src: 'participants.jpg',
    title: 'Bringing the learning forward',
    category: 'community',
    label: 'Our community',
    alt: 'Educators marking their participation in the AI4E learning community'
  }
];

/* LEARNING AREAS */
const areaContent = {
  ethical: {
    title: 'Ethical AI',
    subtitle: 'RESPONSIBLE BY DESIGN',
    intro:
      'Make informed choices about when and how AI can support learning. Keep human judgment, learner dignity, and educational purpose at the center.',
    items: [
      'Check generated information against reliable sources before sharing it.',
      'Protect personal information and avoid entering identifiable learner records into public AI tools.',
      'Look for bias, missing perspectives, and content that may exclude learners.',
      'Acknowledge AI assistance and keep educators responsible for final decisions.'
    ],
    action: 'ethics'
  },

  innovation: {
    title: 'Innovation',
    subtitle: 'CREATIVITY WITH A PURPOSE',
    intro:
      'Start with a real classroom need, then explore how AI can help educators and learners imagine, test, and improve possible solutions.',
    items: [
      'Identify a specific teaching or learning challenge.',
      'Use AI to brainstorm options, then select ideas using teacher judgment.',
      'Design authentic projects that connect learning to local needs.',
      'Test a small version, collect feedback, and improve the approach.'
    ],
    action: 'planning'
  },

  capacity: {
    title: 'Capacity Building',
    subtitle: 'CONFIDENT EDUCATORS, STRONGER COMMUNITIES',
    intro:
      'Build practical AI literacy through guided exploration, peer learning, and reflection. Grow confidence one purposeful classroom application at a time.',
    items: [
      'Explore the strengths and limitations of AI tools.',
      'Practice clear prompts that include a goal, context, and expected output.',
      'Share lessons learned with colleagues and school leaders.',
      'Document what worked, what needs improvement, and what learners need next.'
    ],
    action: 'reflection'
  },

  transformation: {
    title: 'Education Transformation',
    subtitle: 'INCLUSIVE AND FUTURE-READY',
    intro:
      'Connect digital possibilities to meaningful learning. Design experiences that build understanding, agency, collaboration, and real-world problem-solving.',
    items: [
      'Plan accessible alternatives for learners with limited connectivity or devices.',
      'Give learners opportunities to explain and defend their own thinking.',
      'Assess the process, evidence, and final output together.',
      'Use reflection and feedback to improve learning experiences over time.'
    ],
    action: 'planning'
  }
};

/* RESOURCE GUIDES */
const resources = {
  planning: {
    title: 'A meaningful learning project',
    eyebrow: '21PBL · PROJECT PLANNING GUIDE',
    intro:
      'Use this short planning guide to turn a real need into a purposeful learning experience. Adapt it to your learners, competencies, and available resources.',
    sections: [
      [
        '1. Begin with a real challenge',
        'What problem in your school or community could learners explore? Write an open-ended driving question that requires investigation, decisions, and a useful output.'
      ],
      [
        '2. Connect to learning goals',
        'Identify the competencies learners will demonstrate. Decide what evidence will show understanding, technical skill, collaboration, and responsible practice.'
      ],
      [
        '3. Plan the learning journey',
        'Break the project into inquiry, planning, creation, testing, revision, and presentation. Assign clear roles and build in checkpoints for teacher feedback.'
      ],
      [
        '4. Give AI a purposeful role',
        'Identify one task where AI can support brainstorming, questions, or feedback. Set expectations for source checking, disclosure, privacy, and independent thinking.'
      ],
      [
        '5. Create an authentic output',
        'Let learners produce something useful for an audience: a prototype, guide, demonstration, campaign, or documented solution. Provide an offline alternative where needed.'
      ],
      [
        '6. Assess and reflect',
        'Assess the process and output using clear criteria. Ask learners to explain their decisions, show evidence of revisions, and identify what they would improve.'
      ]
    ],
    note:
      'Planning prompt: “Our learners will investigate ___, create ___ for ___, and demonstrate ___ through ___.”'
  },

  ethics: {
    title: 'Responsible AI classroom checklist',
    eyebrow: '21PBL · ETHICAL AI PRACTICE',
    intro:
      'Use these questions before introducing an AI-supported activity. This is a practical reflection aid; follow your school’s approved policies and procedures.',
    sections: [
      [
        'Purpose',
        'Does the tool support a clear learning goal? Can learners still practice and demonstrate the essential skill themselves?'
      ],
      [
        'Accuracy',
        'Have I checked facts, examples, answers, and references? Have learners been taught to question AI outputs and verify important claims?'
      ],
      [
        'Privacy',
        'Have I removed names, learner numbers, contact details, grades, and other personal information? Am I using an approved process for any learner data?'
      ],
      [
        'Fairness and inclusion',
        'Have I checked the output for stereotypes or bias? Is there a meaningful alternative for learners without access to devices or connectivity?'
      ],
      [
        'Transparency',
        'Have I explained where AI may be used, how assistance should be acknowledged, and what learners must complete independently?'
      ],
      [
        'Human oversight',
        'Will a teacher review the output before it is used? Are consequential assessment or learner decisions based on appropriate evidence and professional judgment?'
      ]
    ],
    note:
      'Before sharing: pause, verify, protect, and explain. An AI-generated response is a starting point for review.'
  },

  reflection: {
    title: 'Make learning visible',
    eyebrow: '21PBL · REFLECTION & FEEDBACK PROMPTS',
    intro:
      'Choose a few prompts at project checkpoints or after a learning activity. Invite concrete examples and evidence rather than one-word answers.',
    sections: [
      [
        'For learners: understanding',
        'What can you explain or do now that you could not do before? Which part of your work best shows your progress?'
      ],
      [
        'For learners: decisions',
        'What choices did your group make, and why? What evidence helped you select or change your approach?'
      ],
      [
        'For learners: responsible AI',
        'Where did you use AI, if at all? What did you verify, reject, rewrite, or create yourself? How did you protect personal information?'
      ],
      [
        'For peers: useful feedback',
        'What is working well? What question would help the group think more deeply? What specific improvement could they test next?'
      ],
      [
        'For teachers: evidence',
        'Which outputs and observations show progress toward the competencies? Who needs additional support, practice, or a different learning approach?'
      ],
      [
        'For the next cycle',
        'What will we keep, change, or try? Agree on one practical next step and the evidence that will help you know whether it worked.'
      ]
    ],
    note:
      'Reflection frame: “I used to think ___. Now I understand ___. My evidence is ___. My next step is ___.”'
  }
};

/* PAGE STATE */
let expanded = false;
let activeFilter = 'all';
let currentPhoto = 0;
let activePhotoSet = photos.map((_, index) => index);
let slideshow = null;
let previousFocus = null;

/* MOBILE NAVIGATION */
const menu = $('#main-nav');
const menuButton = $('.menu-toggle');

function closeMenu() {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}

menuButton.addEventListener('click', () => {
  const open = !menu.classList.contains('open');

  menu.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));

  menuButton.setAttribute(
    'aria-label',
    open ? 'Close navigation' : 'Open navigation'
  );
});

$$('#main-nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) {
    closeMenu();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

window.matchMedia('(min-width: 1021px)')
  .addEventListener('change', event => {
    if (event.matches) {
      closeMenu();
    }
  });

/* GALLERY */
function renderGallery() {
  const filtered = photos
    .map((photo, index) => ({ ...photo, index }))
    .filter(photo =>
      activeFilter === 'all' || photo.category === activeFilter
    );

  const visible =
    expanded || activeFilter !== 'all'
      ? filtered
      : filtered.slice(0, 6);

  $('#gallery-grid').innerHTML = visible.map(photo => `
    <button
      class="gallery-card"
      data-photo="${photo.index}"
      aria-label="Open photo: ${photo.title}"
    >
      <span class="gallery-photo">
        <img
          src="${photo.src}"
          alt="${photo.alt}"
          width="2048"
          height="1536"
          loading="lazy"
        >
      </span>

      <span class="gallery-meta">
        <span>${photo.label}</span>
        <span>AI4E · Region VIII</span>
      </span>

      <h3>${photo.title}</h3>
    </button>
  `).join('');

  $('#gallery-status').textContent =
    `Showing ${visible.length} of ${filtered.length} ` +
    (
      activeFilter === 'all'
        ? 'photos'
        : 'photos in this collection'
    );

  $('#show-all-photos').innerHTML = `
    ${expanded ? 'Show fewer photos' : 'View all photos'}
    <svg><use href="#i-arrow"/></svg>
  `;
}

$$('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    $$('[data-filter]').forEach(item => {
      const selected = item === button;

      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });

    renderGallery();
  });
});

$('#show-all-photos').addEventListener('click', () => {
  expanded = !expanded;
  activeFilter = 'all';

  $$('[data-filter]').forEach(button => {
    const selected = button.dataset.filter === 'all';

    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  renderGallery();
});

/* INFORMATION DIALOG */
const infoDialog = $('#info-dialog');
const photoDialog = $('#photo-dialog');

function openDialog(dialog) {
  previousFocus = document.activeElement;
  document.body.classList.add('modal-open');
  dialog.showModal();
}

function showInfo(eyebrow, html) {
  $('#dialog-eyebrow').textContent = eyebrow;
  $('#dialog-content').innerHTML = html;

  const heading = $('h2', $('#dialog-content'));

  if (heading) {
    heading.id = 'dialog-title';
  }

  if (!infoDialog.open) {
    openDialog(infoDialog);
  } else {
    infoDialog.scrollTop = 0;
  }
}

/* RESOURCE CONTENT */
function resourceHtml(resource) {
  return `
    <h2>${resource.title}</h2>
    <p>${resource.intro}</p>

    ${resource.sections.map(([heading, copy]) => `
      <h3>${heading}</h3>
      <p>${copy}</p>
    `).join('')}

    <div class="dialog-note">
      <p>${resource.note}</p>
    </div>

    <div class="dialog-actions">
      <button class="button primary" id="download-resource">
        <svg><use href="#i-download"/></svg>
        Download guide
      </button>

      <button class="button outline" id="print-resource">
        Print guide
      </button>
    </div>
  `;
}

function openResource(key) {
  const resource = resources[key];

  showInfo(resource.eyebrow, resourceHtml(resource));

  $('#download-resource').addEventListener('click', () => {
    const content = [
      'AI4E — ARTIFICIAL INTELLIGENCE FOR EDUCATION',
      resource.eyebrow,
      '',
      resource.title,
      '',
      resource.intro,
      '',
      resource.sections
        .map(([heading, copy]) => `${heading}\n${copy}`)
        .join('\n\n'),
      '',
      resource.note,
      '',
      'AI4E · DepEd Region VIII – Eastern Visayas',
      ''
    ].join('\n');

    const blob = new Blob(
      [content],
      { type: 'text/plain;charset=utf-8' }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `AI4E-${key}-guide.txt`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  $('#print-resource').addEventListener('click', () => {
    window.print();
  });
}

/* LEARNING AREA DETAILS */
function openArea(key) {
  const area = areaContent[key];

  showInfo(area.subtitle, `
    <h2>${area.title}</h2>
    <p>${area.intro}</p>

    <h3>Put it into practice</h3>

    <ul>
      ${area.items.map(item => `<li>${item}</li>`).join('')}
    </ul>

    <div class="dialog-actions">
      <button class="button primary" id="related-resource">
        Open related resource
        <svg><use href="#i-arrow"/></svg>
      </button>
    </div>
  `);

  $('#related-resource').addEventListener('click', () => {
    openResource(area.action);
  });
}

/* JOIN THE MOVEMENT */
function openJoin() {
  showInfo('ONE REGION. ONE VISION.', `
    <h2>Join the movement.</h2>

    <p>
      Bring responsible AI into your learning community,
      one purposeful step at a time.
    </p>

    <ol>
      <li>
        <strong>Explore the learning areas.</strong>
        Start with the principles and practices most relevant
        to your classroom.
      </li>

      <li>
        <strong>Try a classroom project.</strong>
        Use the resource guides to plan, verify, reflect,
        and improve.
      </li>

      <li>
        <strong>Connect with your community.</strong>
        Contact your school or division coordinator about
        AI4E and Project P21 participation.
      </li>
    </ol>

    <div class="dialog-note">
      <p>
        For program inquiries, connect with DepEd Region VIII.
        Participation and activity schedules are coordinated
        through the relevant school or division.
      </p>
    </div>

    <div class="dialog-actions">
      <a
        class="button primary"
        href="mailto:region8@deped.gov.ph?subject=AI4E%20Program%20Inquiry"
      >
        <svg><use href="#i-mail"/></svg>
        Email an inquiry
      </a>

      <button class="button outline" id="join-resources">
        Explore resources
        <svg><use href="#i-arrow"/></svg>
      </button>
    </div>
  `);

  $('#join-resources').addEventListener('click', () => {
    infoDialog.close();

    $('#resources').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

/* PHOTO VIEWER */
function showPhoto() {
  const photo = photos[currentPhoto];

  $('#lightbox-img').src = photo.src;
  $('#lightbox-img').alt = photo.alt;
  $('#photo-caption').textContent = photo.title;
  $('#photo-category').textContent = photo.label;

  $('#photo-counter').textContent =
    `${activePhotoSet.indexOf(currentPhoto) + 1} / ` +
    `${activePhotoSet.length} · AI4E PHOTO STORY`;
}

function stopSlideshow() {
  if (slideshow) {
    clearInterval(slideshow);
    slideshow = null;
  }

  $('#slideshow-toggle').classList.remove('is-playing');

  $('#slideshow-toggle').setAttribute(
    'aria-label',
    'Play slideshow'
  );

  $('#slideshow-toggle').innerHTML = `
    <svg><use href="#i-play"/></svg>
  `;
}

function stepPhoto(step) {
  const position = activePhotoSet.indexOf(currentPhoto);

  currentPhoto = activePhotoSet[
    (
      position + step + activePhotoSet.length
    ) % activePhotoSet.length
  ];

  showPhoto();
}

function startSlideshow() {
  stopSlideshow();

  slideshow = setInterval(() => {
    stepPhoto(1);
  }, 4500);

  $('#slideshow-toggle').classList.add('is-playing');

  $('#slideshow-toggle').setAttribute(
    'aria-label',
    'Pause slideshow'
  );

  $('#slideshow-toggle').innerHTML = `
    <span aria-hidden="true">Ⅱ</span>
  `;
}

function openPhoto(index, highlight = false) {
  if (highlight) {
    activePhotoSet = photos.map((_, photoIndex) => photoIndex);
  } else {
    activePhotoSet = photos
      .map((photo, photoIndex) => ({
        photo,
        index: photoIndex
      }))
      .filter(({ photo }) =>
        activeFilter === 'all' ||
        photo.category === activeFilter
      )
      .map(({ index: photoIndex }) => photoIndex);
  }

  if (!activePhotoSet.includes(index)) {
    activePhotoSet = photos.map((_, photoIndex) => photoIndex);
  }

  currentPhoto = index;

  showPhoto();
  openDialog(photoDialog);

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (highlight && !reducedMotion) {
    startSlideshow();
  }
}

$('#next-photo').addEventListener('click', () => {
  stopSlideshow();
  stepPhoto(1);
});

$('#prev-photo').addEventListener('click', () => {
  stopSlideshow();
  stepPhoto(-1);
});

$('#slideshow-toggle').addEventListener('click', () => {
  if (slideshow) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
});

document.addEventListener('keydown', event => {
  if (!photoDialog.open) {
    return;
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    stopSlideshow();
    stepPhoto(1);
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    stopSlideshow();
    stepPhoto(-1);
  }
});

/* CLOSE DIALOGS */
$$('dialog').forEach(dialog => {
  dialog.addEventListener('close', () => {
    stopSlideshow();
    document.body.classList.remove('modal-open');
    previousFocus?.focus();
  });

  dialog.addEventListener('click', event => {
    if (event.target !== dialog) {
      return;
    }

    const bounds = dialog.getBoundingClientRect();

    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (outside) {
      dialog.close();
    }
  });
});

/* PAGE BUTTON ACTIONS */
document.addEventListener('click', event => {
  const photo = event.target.closest('[data-photo]');

  if (photo) {
    openPhoto(Number(photo.dataset.photo));
  }

  const close = event.target.closest('[data-close]');

  if (close) {
    close.closest('dialog').close();
  }

  const area = event.target.closest('[data-area]');

  if (area) {
    openArea(area.dataset.area);
  }

  const resource = event.target.closest('[data-resource]');

  if (resource) {
    openResource(resource.dataset.resource);
  }

  if (event.target.closest('[data-join]')) {
    openJoin();
  }

  if (event.target.closest('[data-highlights]')) {
    openPhoto(0, true);
  }

  const policy = event.target.closest('[data-policy]');

  if (!policy) {
    return;
  }

  if (policy.dataset.policy === 'privacy') {
    showInfo('YOUR PRIVACY', `
      <h2>A simple, respectful experience.</h2>

      <p>
        This website does not include account registration,
        an inquiry database, or analytics tracking.
        Gallery filters and slideshow controls operate
        in your browser.
      </p>

      <p>
        Downloading a resource creates a text file on your
        device. Email inquiries open your email application;
        your email provider handles sending and storage.
      </p>

      <p>
        Program photographs are presented from the materials
        supplied for this website. For questions about
        a photograph or the program, contact
        <a
          class="text-link"
          href="mailto:region8@deped.gov.ph"
        >region8@deped.gov.ph</a>.
      </p>
    `);
  } else {
    showInfo('ACCESS FOR EVERYONE', `
      <h2>Designed for more people.</h2>

      <p>
        Use the website with a keyboard, mouse, or touchscreen.
        Tab moves between controls. Enter or Space activates
        buttons. Escape closes an open dialog.
      </p>

      <p>
        In the photo viewer, use the left and right arrow
        keys to move through the collection. You can pause
        the slideshow at any time.
      </p>

      <p>
        Use the Pause animations control above the masthead
        to stop decorative motion. Automatic playback and
        decorative effects respect your device’s
        reduced-motion preference.
      </p>

      <p>
        The layout adapts to small screens and browser zoom.
        Images have text alternatives, buttons have accessible
        labels, and resource guides can be downloaded
        as plain text.
      </p>
    `);
  }
});

/* ACTIVE NAVIGATION */
const observedSections = $$(
  '#home,#about,#learning,#resources,#gallery,#events,#contact'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) =>
        b.intersectionRatio - a.intersectionRatio
      );

    if (!visible.length) {
      return;
    }

    const id = visible[0].target.id;

    $$('#main-nav a').forEach(link => {
      const active =
        link.getAttribute('href') === `#${id}`;

      link.classList.toggle('active', active);

      if (active) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, {
    rootMargin: '-15% 0px -45% 0px',
    threshold: [0, 0.1, 0.4]
  });

  observedSections.forEach(section => {
    observer.observe(section);
  });
}

/* INITIALIZE */
$('#year').textContent = new Date().getFullYear();

renderGallery();
