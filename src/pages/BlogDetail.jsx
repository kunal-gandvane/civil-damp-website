import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, User, Calendar, Tag } from 'lucide-react'
import { blogs, semexBlogs } from '../data/dummy'
import { useEffect } from 'react'

const categoryColors = {
  Internships: 'var(--color-primary)',
  'Semester Exchange': 'var(--color-accent)',
  Research: '#334155',
  Placements: '#7c3d12',
  Academics: '#1e5c3a',
}

// Expand each blog with a longer "full content" body
const blogContent = {
  1: `Landing a core civil engineering internship at L&T is a dream for many CE students at IIT Bombay, and it was mine too. After two years of watching seniors head off to job sites in Hyderabad and Chennai, I was determined to make it happen in my third year.

**Preparation (Oct–Dec):**
I started by downloading every available course review on structural engineering from the DAMP portal. I re-read IS 456, made hand-written notes on column design, and solved problems from Pillai & Menon cover to cover. The trick was to not just memorize but understand *why* each clause exists.

**The Resume:**
L&T's JMT (Junior Management Trainee) program shortlists based on CGPA (mine was 8.4) and relevant project work. I highlighted my CE 301 project on a multi-storey frame and my summer project at a local construction site. Keep it one page, specific, and honest.

**The Interview:**
The technical round was intense — they asked me to design a simply supported beam live on the whiteboard, explain the concept of effective length of columns, and discuss IS 875 load combinations. Practice speaking through your thought process out loud.

**On the Job:**
For two months I was embedded in the RC frame design team for a commercial tower in Hyderabad. I ran ETABS models under supervision, checked rebar schedules, and attended site coordination meetings. The best part was seeing design decisions translate directly to steel being placed on site.

**Takeaway:**
Core internships at L&T are absolutely worth the preparation effort. You will leave with a working knowledge of ETABS, an understanding of how design codes are actually applied, and a network in one of India's largest construction companies.`,

  2: `Arup was a name I first heard in a guest lecture in my second year. By the time I applied, I knew exactly why I wanted to work there — they do genuinely interesting multi-disciplinary infrastructure work, and their Gurugram office handles major South Asia projects.

**How I got in:**
Arup's internship process involved a written assessment on transport planning fundamentals, followed by a case study and an HR interview. The case study involved proposing a BRT corridor alignment for a fictional Indian city — I focused on integration with existing metro and pedestrian safety.

**The Work:**
I was assigned to the transport demand modelling team working on a metro corridor feasibility study. My main task was running assignment iterations in VISUM and validating against traffic count data. I also helped draft sections of the Environmental Impact Assessment.

**The Culture:**
Arup is genuinely flat — I had direct conversations with Associates and even a Principal on a couple of occasions. They value intellectual curiosity over pedigree. Friday afternoon knowledge-sharing sessions were one of my favourite parts.

**For Aspirants:**
Read up on transport planning fundamentals — VISUM/VISSIM basics, four-step transport models, and level of service concepts. Arup values structured thinking and communication, so practice presenting your ideas clearly.`,

  3: `McKinsey was not on my radar until a DAMP talk in my second year where a senior described how CE engineers bring unique value to consulting — systems thinking, quantitative skills, and the ability to manage complexity. That talk changed my trajectory.

**Case Prep (3 months):**
I started with Case in Point and Victor Cheng's frameworks, then shifted to practicing cases daily with a study group of 4. We did 2 cases each per day over the last month. The key insight: consulting cases are about structured thinking, not specific knowledge.

**The Civil Advantage:**
In the final round, my case was about a port logistics company facing capacity constraints. My civil background let me speak naturally about berth utilisation, container yard layouts, and crane cycles — things a generic candidate would have to approximate. The partner noticed.

**Internship Life:**
I was placed in the Infrastructure Practice, working on a smart city project for a state government client. The work involved stakeholder interviews, data analysis in Excel and PowerPoint, and presenting to senior government officials. The travel was intense — 3 cities in 10 weeks.

**The Offer:**
I converted to a PPO (Pre-Placement Offer). My advice: show genuine intellectual curiosity, be structured under pressure, and don't pretend to know things you don't — say "I'd want to validate that assumption" instead.`,

  4: `Getting a research internship at IISc felt distant until I just cold-emailed Prof. D. Nagesh Kumar with a specific, well-researched proposal. Three weeks later I was on a bus to Bangalore.

**The Cold Email:**
I read two of the professor's recent papers, identified a gap I found genuinely interesting, and wrote a focused 200-word email explaining exactly what I wanted to work on and why. No generic "I am interested in your research" openers.

**The Work:**
Rainfall-runoff modelling using SWAT (Soil and Water Assessment Tool) for the Krishna river basin. I spent the first three weeks learning the software and understanding the basin's hydrology, then calibrated the model against observed streamflow data. By week six, we had results good enough for a conference paper.

**IISc Life:**
The campus is stunning. The food is good and cheap. The research culture is serious but collegial. I had access to computing resources far beyond what IITB undergrads typically get, and the interdisciplinary conversations at lunch were consistently stimulating.

**Outcome:**
We submitted to HYDRO 2024 and the paper was accepted. That one publication fundamentally changed my graduate school applications.`,

  5: `Three months at AECOM's Melbourne office was the most intensive professional experience of my life — and also the most formative.

**Getting the Internship:**
AECOM's international internship program requires applying through their global portal. I applied in August, had a video interview in September, and got the offer in October. The visa (subclass 485 is not applicable for short stays — I got a Temporary Activity visa) took six weeks.

**The Work:**
I was part of the tunnel geotechnics team on the Melbourne Metro Tunnel Project expansion study. Day-to-day work included reviewing TBM (Tunnel Boring Machine) operational logs, updating geotechnical risk registers, and contributing to settlement prediction models for heritage buildings along the alignment.

**Living in Melbourne:**
Expensive — my studio in Southbank cost AUD 2,200/month. But AECOM's stipend was generous enough to cover it and leave some for weekend trips (Great Ocean Road, Philip Island). The multicultural food scene made me feel less homesick.

**Skills Gained:**
I can now hold a real conversation about ground characterisation, TBM face pressure management, and Australian geotechnical standards (AS 4678). More importantly, I understand how large infrastructure projects are actually managed at an international level.`,

  6: `Working at NITI Aayog was unlike any engineering internship I could have imagined. Instead of design software, my tools were policy briefs, Excel dashboards, and endless stakeholder meetings.

**The Process:**
NITI Aayog offers competitive internships through their portal (niti.gov.in). Shortlisting is based on your SOP and academic profile. I emphasised my interest in smart cities and submitted a sample policy brief I had written for a CE course project.

**Day-to-Day Work:**
I was placed in the Smart Cities Mission evaluation cell. My primary project was building an assessment framework for the 100 Smart Cities — quantifying progress on mobility, water, sanitation, and digital infrastructure using data from municipal corporations. I presented findings to a Joint Secretary.

**The Learning:**
You quickly realise that great infrastructure ideas often fail at implementation due to governance, funding, and political economy challenges. Engineers who understand this are genuinely rare and valuable. I left with a much more nuanced view of how public infrastructure works in India.

**Who Should Apply:**
If you are even slightly curious about public policy, urban planning, or development economics — apply. You will come back a better engineer, with context that most technical people never get.`,

  7: `Six months in Singapore felt like the perfect experiment: close enough to home to not feel completely lost, different enough to genuinely stretch me.

**Before You Go:**
The NUS Student Exchange Programme (SEP) application goes through IRCC at IIT Bombay. Get your CGPA above 8.0, prepare a strong SOP, and apply by the September deadline for the following January semester.

**Courses:**
I took four courses — Advanced Structural Analysis, Sustainable Urban Infrastructure, a project management elective, and a general education module on Southeast Asian history. NUS courses are well-structured and the grading is transparent.

**Housing:**
I stayed at UTown Residence. Book early — it fills up fast. Costs around SGD 700/month with meal plan, which is actually cheaper than off-campus options.

**Life Outside Class:**
The best part of Singapore for an Indian student is the food — hawker centres make incredible South Indian food for SGD 4. I travelled every weekend — Bali, Bangkok, Kuala Lumpur, Cameron Highlands. Southeast Asia is incredibly accessible from Singapore.

**The Verdict:**
NUS is not ETH Zürich in research prestige, but it is a genuinely excellent experience for the exposure it gives you to a very different engineering and urban planning culture. Highly recommended.`,

  8: `The IITB placement season is both more structured and more chaotic than any guide can fully capture. Here is what I wish someone had told me before Day 1.

**The Timeline:**
Companies register with the Placement Cell from August onwards. Shortlists (based on CV and sometimes online tests) come out in October–November. Day 1 of placements is December 1st, when the most coveted companies interview. Day 2 onwards, it cascades.

**For CE Students Specifically:**
The CE placement pool is smaller than CS or EE, which means higher per-student attention from CE-specific companies like L&T, NHAI, Arup, WSP, Jacobs, and AECOM. But top consulting, finance, and tech companies also come — and CE students compete with the full campus.

**The DAP Test:**
Many consulting and finance companies use the Day 1 Aptitude Test (DAP) — a standardised IITB aptitude test. Practice quant, logical reasoning, and verbal sections. Many CE students ignore this and regret it.

**Mental Health:**
This is real. The herd mentality of placements can make you second-guess your genuine interests. Ground yourself in what you actually want to do — not what your peers are doing. Some of the most fulfilled seniors I know joined organisations that weren't Day 1 companies.`,

  9: `IIT Bombay sits on top of one of India's richest research ecosystems — but as an undergrad, accessing it requires you to knock on doors. Here is how to do it effectively.

**Which Labs to Target:**
In Civil Engineering, standout research labs include Prof. Ravi Sinha's earthquake engineering group, Prof. Bharat Lohani's remote sensing lab, Prof. Roshni T.'s hydrology group, and the construction materials lab under Prof. Anand Desai. Read their recent publications before approaching.

**The Cold Email Formula:**
Subject: "Undergraduate Research Interest — [Specific Topic]"
Body: 3 paragraphs — (1) who you are and why this lab specifically, (2) which paper of theirs you read and what question it raised for you, (3) what you can contribute and what you hope to learn. Under 250 words. No attachments unless asked.

**Response Rate:**
Expect roughly 30–40% response rate if your email is specific and well-written. Professors are busy but genuinely appreciate motivated undergrads. Follow up once after two weeks if you hear nothing.

**What to Expect:**
Your first semester in a lab will involve literature reviews, learning software, and small contributions. Do not expect to be leading anything. Show up consistently, ask good questions, and produce quality work — the interesting projects come with trust.

**The Payoff:**
Research experience compounds. One good semester leads to a BTP recommendation, which leads to strong graduate school letters. The earlier you start, the better.`,
}

export default function BlogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const blogId = parseInt(id)

  // Find from both blogs and semexBlogs
  const allBlogs = [
    ...blogs.map(b => ({ ...b, isSemex: false })),
    ...semexBlogs.map(b => ({ ...b, id: b.id + 100, isSemex: true, category: 'Semester Exchange' })),
  ]

  const blog = allBlogs.find(b => b.id === blogId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  if (!blog) {
    return (
      <div className="page-fade pt-24 min-h-screen flex items-center justify-center bg-[#faf9f5]">
        <div className="text-center p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-sm max-w-md">
          <p className="font-mono text-5xl font-extrabold text-neutral-300 mb-2">404</p>
          <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">Blog post not found</h2>
          <p className="text-sm text-neutral-500 mb-6">The article you are looking for doesn't exist or has moved.</p>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
          >
            ← Back to Experiences
          </Link>
        </div>
      </div>
    )
  }

  const content = blogContent[blogId] || blog.excerpt

  // Related blogs (same category, excluding current)
  const related = blogs.filter(b => b.category === blog.category && b.id !== blog.id).slice(0, 2)

  return (
    <div className="page-fade pt-24 pb-20 min-h-screen bg-[#faf9f5]">
      {/* Editorial Creso-style Hero */}
      <section className="relative overflow-hidden creso-hero-glow pt-8 pb-14 border-b border-neutral-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-2xs text-xs font-semibold text-neutral-800 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>{blog.category}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.2] mb-6">
            {blog.title}
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-3 text-xs text-neutral-600 font-medium">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-neutral-200/70">
              <User size={13} className="text-neutral-500" /> {blog.author}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-neutral-200/70">
              <Tag size={13} className="text-neutral-500" /> {blog.batch}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-neutral-200/70">
              <Calendar size={13} className="text-neutral-500" /> {blog.date}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold text-neutral-700 hover:text-neutral-900 shadow-2xs hover:shadow-xs mb-8 transition-all group cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>

        {/* Article Body */}
        <article className="bg-white rounded-3xl p-8 sm:p-14 border border-neutral-200/80 shadow-[0_4px_24px_rgb(0,0,0,0.03)]">
          {/* Excerpt / Lead paragraph */}
          <div className="text-lg sm:text-xl leading-relaxed text-neutral-800 font-serif italic mb-8 pb-8 border-b border-neutral-100">
            "{blog.excerpt}"
          </div>

          {/* Full content with structured typography */}
          <div className="space-y-6">
            {content.split('\n\n').map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**')) {
                return (
                  <h3 key={i} className="font-display text-xl sm:text-2xl font-bold text-neutral-900 pt-6 mb-2 border-t border-neutral-100 first:border-none first:pt-0">
                    {para.replace(/\*\*/g, '')}
                  </h3>
                )
              }
              // Inline bold: **text**
              const parts = para.split(/(\*\*[^*]+\*\*)/)
              return (
                <p key={i} className="text-neutral-700 leading-relaxed text-base">
                  {parts.map((part, j) =>
                    part.startsWith('**') && part.endsWith('**')
                      ? <strong key={j} className="font-semibold text-neutral-900">{part.replace(/\*\*/g, '')}</strong>
                      : part
                  )}
                </p>
              )
            })}
          </div>
        </article>

        {/* Author Card */}
        <div className="mt-8 p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-2xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 bg-neutral-900 border border-neutral-700 shadow-xs">
            {blog.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
          </div>
          <div>
            <p className="font-bold text-neutral-900 text-base">{blog.author}</p>
            <p className="text-xs text-neutral-500 font-medium">{blog.batch} · Department of Civil Engineering, IIT Bombay</p>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-neutral-900">
                More in {blog.category}
              </h3>
              <Link to="/experience?tab=1" className="text-xs font-semibold text-amber-700 hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map(rb => (
                <Link
                  key={rb.id}
                  to={`/blogs/${rb.id}`}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all block group"
                >
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 inline-block mb-3">
                    {rb.category}
                  </span>
                  <h4 className="font-bold text-neutral-900 mb-2 leading-snug text-sm group-hover:text-amber-800 transition-colors">
                    {rb.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mb-3">{rb.author} · {rb.date}</p>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">{rb.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 group-hover:translate-x-1 transition-transform">
                    Read Story →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Experiences */}
        <div className="mt-12 text-center">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-xs"
          >
            ← Back to Experiences & Blogs
          </Link>
        </div>
      </div>
    </div>
  )
}
