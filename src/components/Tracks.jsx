import React, { useState } from 'react';

const tracks = [
  { icon: '🌡️', id: 'T1', title: 'Climate Science & Atmospheric Research', topics: ['Global temperature anomalies and feedback mechanisms', 'Atmospheric CO₂ dynamics and carbon budgets', 'Ocean acidification and sea-level rise projections', 'Extreme weather events and attribution science', 'Paleoclimate records and future projections'] },
  { icon: '🦋', id: 'T2', title: 'Biodiversity Conservation & Ecology', topics: ['Species extinction rates and conservation biology', 'Habitat fragmentation and wildlife corridors', 'Invasive species management and ecosystem resilience', 'Marine biodiversity and coral reef conservation', 'Rewilding initiatives and ecological restoration'] },
  { icon: '🌱', id: 'T3', title: 'Sustainable Agriculture & Food Systems', topics: ['Climate-resilient crop varieties and agroforestry', 'Soil health, carbon sequestration in farmlands', 'Reducing agricultural greenhouse gas emissions', 'Food security under changing climate regimes', 'Vertical farming and precision agriculture'] },
  { icon: '⚡', id: 'T4', title: 'Renewable Energy & Energy Transition', topics: ['Solar, wind, and tidal energy advancements', 'Energy storage and smart grid technologies', 'Just transition for fossil fuel-dependent communities', 'Green hydrogen and next-generation fuels', 'Energy poverty and equitable access'] },
  { icon: '🏙️', id: 'T5', title: 'Urban Sustainability & Climate Resilience', topics: ['Green infrastructure and urban heat islands', 'Climate-adaptive urban planning and zoning', 'Low-carbon transportation systems', 'Circular economy in urban waste management', 'Smart cities and digital sustainability tools'] },
  { icon: '🌊', id: 'T6', title: 'Ocean & Marine Ecosystem Research', topics: ['Deep-sea biodiversity and plastic pollution', 'Mangrove and seagrass ecosystem services', 'Blue carbon accounting and ocean-based solutions', 'Fisheries sustainability and aquaculture', 'Marine protected area governance'] },
  { icon: '⚖️', id: 'T7', title: 'Climate Justice & Environmental Governance', topics: ['Loss and damage financing for vulnerable nations', 'Indigenous knowledge in environmental stewardship', 'International climate agreements and compliance', 'Environmental racism and equity in policy', 'NGO and civil society roles in climate action'] },
  { icon: '💰', id: 'T8', title: 'Green Finance & Sustainable Economics', topics: ['Carbon markets, pricing, and taxation', 'ESG investing and green bond frameworks', 'Degrowth, circular economy, and new economic models', 'Climate risk valuation and financial disclosure', 'Development finance for green transitions'] },
  { icon: '🧬', id: 'T9', title: 'Environmental Health & One Health Approach', topics: ['Air and water quality impacts on public health', 'Zoonotic disease emergence and climate linkages', 'Mental health impacts of ecological grief', 'Toxicology and environmental contamination', 'Planetary health and wellbeing frameworks'] },
  { icon: '🤖', id: 'T10', title: 'Technology & Innovation for Sustainability', topics: ['AI and machine learning in climate modelling', 'Remote sensing and satellite monitoring of ecosystems', 'Blockchain for supply chain sustainability', 'Biotechnology in conservation and restoration', 'Digital twins for environmental management'] },
  { icon: '📚', id: 'T11', title: 'Environmental Education & Capacity Building', topics: ['Sustainability curricula in higher education', 'Community-based environmental literacy programs', 'Youth activism and climate communication', 'Citizen science and participatory research', 'Role of media and journalism in climate narratives'] },
  { icon: '🏔️', id: 'T12', title: 'Land Use, Forestry & Carbon Sinks', topics: ['REDD+ implementation and tropical forest protection', 'Peatland restoration and carbon storage', 'Land rights, tenure security, and deforestation drivers', 'Mountain ecosystems and cryosphere dynamics', 'Agroecology and land degradation neutrality'] },
];

export default function Tracks() {
  const [active, setActive] = useState(null);

  return (
    <section id="tracks">
      <div className="container">
        <div className="section-header">
          <span className="section-label">🔍 Research Areas</span>
          <h2>Conference Tracks</h2>
          <p>
            ICCBGSR 2027 encompasses twelve thematic tracks spanning the breadth of sustainability
            science. Click any track to explore its sub-topics.
          </p>
        </div>

        <div className="tracks-grid">
          {tracks.map((t) => (
            <div key={t.id} className={`track-card ${active === t.id ? 'active' : ''}`}
                 onClick={() => setActive(active === t.id ? null : t.id)}>
              <div className="track-header">
                <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                  <span className="track-icon">{t.icon}</span>
                  <span className="track-id">{t.id}</span>
                </div>
                <span className="track-chevron">{active === t.id ? '▾' : '▸'}</span>
              </div>
              <h4 className="track-title">{t.title}</h4>
              {active === t.id && (
                <ul className="styled-list track-topics">
                  {t.topics.map((tp, i) => <li key={i}>{tp}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tracks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .track-card {
          background: var(--paper-card);
          border: 1.5px solid var(--border-soft);
          border-radius: var(--radius);
          padding: 20px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .track-card:hover { border-color: var(--teal); box-shadow: var(--shadow-sm); }
        .track-card.active { border-color: var(--teal); background: var(--teal-pale); }
        .track-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .track-icon { font-size: 1.4rem; }
        .track-id { font-family: var(--font-mono); font-size: 0.72rem; color: var(--teal); font-weight: 500; padding: 2px 8px; background: var(--teal-pale); border-radius: 4px; }
        .track-title { font-size: 0.95rem; font-weight: 600; color: var(--ink-soft); font-family: var(--font-body); line-height: 1.4; }
        .track-chevron { color: var(--teal); font-size: 0.9rem; }
        .track-topics { margin-top: 14px; }
        .track-topics li { font-size: 0.87rem; }
        @media (max-width: 900px) { .tracks-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .tracks-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
