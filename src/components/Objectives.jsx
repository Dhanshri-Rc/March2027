import React from 'react';

const objectives = [
  {
    num: '01',
    title: 'Advance Scientific Knowledge',
    desc: 'Facilitate the dissemination of cutting-edge research findings on climate systems, biodiversity indices, ecosystem dynamics, and sustainability metrics from researchers worldwide.',
  },
  {
    num: '02',
    title: 'Bridge Science and Policy',
    desc: 'Create structured dialogue between scientific researchers and policy practitioners to ensure evidence-based decision-making at national and international governance levels.',
  },
  {
    num: '03',
    title: 'Foster Interdisciplinary Collaboration',
    desc: 'Break down disciplinary silos by convening natural scientists, social scientists, economists, engineers, ethicists, and community leaders around shared sustainability challenges.',
  },
  {
    num: '04',
    title: 'Support Developing Nations',
    desc: 'Amplify research voices from the Global South — nations that face disproportionate climate impacts — and champion equitable solutions to the ecological crisis.',
  },
  {
    num: '05',
    title: 'Catalyze Innovation',
    desc: 'Showcase and evaluate emerging technologies and methodologies in renewable energy, conservation biology, sustainable agriculture, circular economy, and climate adaptation.',
  },
  {
    num: '06',
    title: 'Build Research Capacity',
    desc: 'Through workshops, mentorship sessions, and networking, support early-career researchers in building skills, networks, and publication pathways for impactful work.',
  },
  {
    num: '07',
    title: 'Promote Sustainable Development Goals',
    desc: 'Align research presentations and recommendations with the UN SDGs, particularly SDG 13 (Climate Action), SDG 14 (Life Below Water), and SDG 15 (Life on Land).',
  },
  {
    num: '08',
    title: 'Establish Research Partnerships',
    desc: 'Facilitate the formation of international research consortia, joint funding applications, and collaborative publication projects among conference participants.',
  },
];

export default function Objectives() {
  return (
    <section id="objectives">
      <div className="container">
        <div className="section-header">
          <span className="section-label">🎯 Goals</span>
          <h2>Conference Objectives</h2>
          <p>
            ICCBGSR 2027 pursues eight core objectives that collectively advance our collective
            understanding of — and capacity to respond to — the planetary sustainability crisis.
          </p>
        </div>

        <div className="grid-2" style={{gap:'20px'}}>
          {objectives.map((obj) => (
            <div key={obj.num} className="obj-card">
              <span className="obj-num">{obj.num}</span>
              <div>
                <h4 style={{marginBottom:'8px', fontSize:'1.05rem'}}>{obj.title}</h4>
                <p style={{fontSize:'0.93rem'}}>{obj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .obj-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          background: var(--paper-card);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius);
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .obj-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--border);
        }
        .obj-num {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--teal-pale);
          -webkit-text-stroke: 1.5px var(--teal);
          line-height: 1;
          flex-shrink: 0;
          width: 44px;
        }
      `}</style>
    </section>
  );
}
