import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './RequestStatusPage.css';

const MOCK_REQUESTS = [
  {
    id: 'REQ-001',
    phoneDigits: '5551234567',
    emailNorm: 'john@example.com',
    name: 'John Smith',
    phoneDisplay: '(555) 123-4567',
    email: 'john@example.com',
    status: 'pending',
    submittedAt: 'Oct 12, 2026',
    services: ['Solar Panel Installation', 'Roof Inspection'],
    message: 'Interested in a full roof assessment before install.',
    mapLink: 'https://maps.google.com/?q=30.2672,-97.7431',
    zip: '78701',
    propertyType: 'Home',
    preferredContact: 'Phone',
    timeline: 'This month',
    monthlyBill: '$140/mo',
    responseWindow: 'We typically respond within 1–2 business days.',
  },
  {
    id: 'REQ-003',
    phoneDigits: '5554567890',
    emailNorm: 'mike@example.com',
    name: 'Michael Chen',
    phoneDisplay: '(555) 456-7890',
    email: 'mike@example.com',
    status: 'accepted',
    submittedAt: 'Oct 10, 2026',
    services: ['Battery Storage', 'Solar Panel Installation'],
    message: 'Hybrid system quote for south-facing roof.',
    mapLink: '',
    zip: '73301',
    propertyType: 'Home',
    preferredContact: 'Email',
    timeline: '1-3 months',
    monthlyBill: '$95/mo',
    scheduledDate: 'Nov 8, 2026',
    scheduledTime: '9:00 AM - 12:00 PM CST',
    priceDisplay: '$28,450',
    priceNote: 'Final price after incentives; financing options available.',
    technicianNote: 'Team will bring ladder equipment; gate code on file.',
  },
  {
    id: 'REQ-005',
    phoneDigits: '5551114444',
    emailNorm: 'james@example.com',
    name: 'James Brown',
    phoneDisplay: '(555) 111-4444',
    email: 'james@example.com',
    status: 'rejected',
    submittedAt: 'Oct 8, 2026',
    services: ['Residential Solar'],
    message: 'Small roof area - want maximum panels.',
    mapLink: '',
    zip: '77002',
    propertyType: 'Apartment',
    preferredContact: 'WhatsApp',
    timeline: 'ASAP',
    monthlyBill: '',
    rejectionReason: 'Property type does not meet minimum roof requirements for our standard residential install program.',
    nextAction: 'We can refer you to a partner for community solar or EV-only options. Contact support to discuss.',
  },
];

const normId = (s) => String(s || '').trim().toUpperCase().replace(/\s+/g, '');
const normEmail = (s) => String(s || '').trim().toLowerCase();
const digitsOnly = (s) => String(s || '').replace(/\D/g, '');

function findRequest(requestId, contact) {
  const id = normId(requestId);
  const email = normEmail(contact);
  const phone = digitsOnly(contact);
  if (!id) return null;
  return (
    MOCK_REQUESTS.find((r) => {
      if (normId(r.id) !== id) return false;
      if (email && r.emailNorm === email) return true;
      if (phone && phone.length >= 10 && r.phoneDigits === phone) return true;
      return false;
    }) || null
  );
}

const timelineSteps = (status) => [
  { key: 'submitted', title: 'Submitted', meta: 'We received your request.' },
  { key: 'review', title: 'Under review', meta: 'Our team is evaluating your details.' },
  {
    key: 'decision',
    title: 'Decision',
    meta:
      status === 'accepted'
        ? 'Approved - scheduling next.'
        : status === 'rejected'
          ? 'Not approved for this program.'
          : 'Awaiting decision.',
  },
];

const StatusBadge = ({ status }) => {
  const map = {
    pending: { className: 'request-tracker-badge-status--pending', label: 'Pending' },
    accepted: { className: 'request-tracker-badge-status--accepted', label: 'Accepted' },
    rejected: { className: 'request-tracker-badge-status--rejected', label: 'Rejected' },
  };
  const m = map[status] || map.pending;
  return <span className={`request-tracker-badge-status ${m.className}`}>{m.label}</span>;
};

const Timeline = ({ status }) => {
  const steps = timelineSteps(status);
  const dotForIndex = (i) => {
    if (status === 'pending') {
      if (i === 0) return 'request-tracker-timeline-dot request-tracker-timeline-dot--done';
      if (i === 1) return 'request-tracker-timeline-dot request-tracker-timeline-dot--current';
      return 'request-tracker-timeline-dot request-tracker-timeline-dot--muted';
    }
    if (i < 2) return 'request-tracker-timeline-dot request-tracker-timeline-dot--done';
    return 'request-tracker-timeline-dot request-tracker-timeline-dot--current';
  };

  return (
    <ol className="request-tracker-timeline">
      {steps.map((step, i) => (
        <li key={step.key}>
          <span className={dotForIndex(i)} aria-hidden />
          <div>
            <div className="request-tracker-timeline-title">{step.title}</div>
            <div className="request-tracker-timeline-meta">{step.meta}</div>
          </div>
        </li>
      ))}
    </ol>
  );
};

const DecisionCard = ({ request }) => {
  if (request.status === 'pending') {
    return (
      <div className="request-tracker-card request-tracker-card--inner">
        <h3>What happens next</h3>
        <p className="request-tracker-summary" style={{ margin: 0 }}>
          {request.responseWindow || 'Our team will contact you using your preferred method once your request is reviewed.'}
        </p>
      </div>
    );
  }

  if (request.status === 'accepted') {
    return (
      <div className="request-tracker-card request-tracker-card--inner">
        <h3>Schedule & pricing</h3>
        <dl className="request-tracker-dl request-tracker-dl--2col">
          <div>
            <dt>Scheduled date</dt>
            <dd>{request.scheduledDate || '-'}</dd>
          </div>
          <div>
            <dt>Time window</dt>
            <dd>{request.scheduledTime || '-'}</dd>
          </div>
          <div>
            <dt>Quoted price</dt>
            <dd style={{ fontSize: '18px', fontWeight: 800, color: '#86efac' }}>{request.priceDisplay || '-'}</dd>
          </div>
          <div>
            <dt>Notes</dt>
            <dd>{request.priceNote || request.technicianNote || '-'}</dd>
          </div>
        </dl>
      </div>
    );
  }

  return (
    <div className="request-tracker-card request-tracker-card--inner">
      <h3>Decision details</h3>
      <p className="request-tracker-summary" style={{ margin: '0 0 12px' }}>
        <strong style={{ color: '#fda4af' }}>Reason:</strong> {request.rejectionReason || 'No additional details.'}
      </p>
      <p className="request-tracker-summary" style={{ margin: 0, opacity: 0.9 }}>
        {request.nextAction || 'If you have questions, please reach out to our support team.'}
      </p>
    </div>
  );
};

const RequestStatusPage = () => {
  const [requestId, setRequestId] = useState('');
  const [contact, setContact] = useState('');
  const [phase, setPhase] = useState('idle');
  const [focusId, setFocusId] = useState('');
  const [expandedId, setExpandedId] = useState('');
  const [fieldError, setFieldError] = useState('');

  const sortedRequests = useMemo(
    () =>
      [...MOCK_REQUESTS].sort((a, b) => {
        const rank = { accepted: 0, pending: 1, rejected: 2 };
        const ra = rank[a.status] ?? 99;
        const rb = rank[b.status] ?? 99;
        if (ra !== rb) return ra - rb;
        return normId(a.id).localeCompare(normId(b.id));
      }),
    []
  );

  const summaryTextFor = (request) => {
    if (request.status === 'pending') return 'Your request is under review. We will update you soon.';
    if (request.status === 'accepted') return 'Great news - your request was accepted.';
    return 'Your request was not approved for this program.';
  };

  const onTrack = () => {
    setFieldError('');
    const id = normId(requestId);
    const c = String(contact).trim();
    if (!id) {
      setFieldError('Please enter your request ID.');
      setPhase('validationError');
      return;
    }
    if (!c) {
      setFieldError('Please enter the phone number or email used on your request.');
      setPhase('validationError');
      return;
    }
    const email = normEmail(c);
    const phone = digitsOnly(c);
    if (!email.includes('@') && phone.length < 10) {
      setFieldError('Enter a valid email or a phone number with area code.');
      setPhase('validationError');
      return;
    }

    setPhase('loading');
    window.setTimeout(() => {
      const found = findRequest(requestId, contact);
      if (found) {
        setPhase('idle');
        setFocusId(found.id);
        setExpandedId(found.id);
      } else {
        setPhase('notFound');
      }
    }, 650);
  };

  return (
    <div className="request-tracker-page">
      <div className="request-tracker-hero">
        <div className="request-tracker-badge">Client portal</div>
        <h1 className="request-tracker-title">Track your request</h1>
        <p className="request-tracker-sub">
          Requests are grouped by status. Open any card to view full details. The tracker is optional at the bottom.
        </p>
      </div>

      <div className="request-tracker-list">
        {sortedRequests.map((request) => {
          const isOpen = expandedId === request.id;
          const isFocused = focusId === request.id;

          return (
            <div key={request.id} className={`request-tracker-card request-tracker-list-card ${isFocused ? 'request-tracker-list-card--focus' : ''}`}>
              <div className="request-tracker-status-row">
                <StatusBadge status={request.status} />
                <span style={{ fontFamily: 'monospace', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{request.id}</span>
                <button type="button" className="request-tracker-btn-ghost request-tracker-expand-btn" onClick={() => setExpandedId(isOpen ? '' : request.id)}>
                  {isOpen ? 'Close details' : 'View details'}
                </button>
              </div>

              <p className="request-tracker-summary">{summaryTextFor(request)}</p>

              {isOpen && (
                <div className="request-tracker-expand-area">
                  <h3 style={{ marginTop: 24 }}>Progress</h3>
                  <Timeline status={request.status} />

                  <div className="request-tracker-expand-grid">
                    <div className="request-tracker-card request-tracker-card--inner">
                      <h3>Request details</h3>
                      <dl className="request-tracker-dl request-tracker-dl--2col">
                        <div>
                          <dt>Name</dt>
                          <dd>{request.name}</dd>
                        </div>
                        <div>
                          <dt>Submitted</dt>
                          <dd>{request.submittedAt}</dd>
                        </div>
                        <div>
                          <dt>Phone</dt>
                          <dd>{request.phoneDisplay}</dd>
                        </div>
                        <div>
                          <dt>Email</dt>
                          <dd>{request.email}</dd>
                        </div>
                        <div>
                          <dt>ZIP</dt>
                          <dd>{request.zip || '-'}</dd>
                        </div>
                        <div>
                          <dt>Property</dt>
                          <dd>{request.propertyType || '-'}</dd>
                        </div>
                        <div>
                          <dt>Preferred contact</dt>
                          <dd>{request.preferredContact || '-'}</dd>
                        </div>
                        <div>
                          <dt>Timeline</dt>
                          <dd>{request.timeline || '-'}</dd>
                        </div>
                        {request.monthlyBill ? (
                          <div>
                            <dt>Est. bill</dt>
                            <dd>{request.monthlyBill}</dd>
                          </div>
                        ) : null}
                      </dl>

                      <h3 style={{ marginTop: 20 }}>Services</h3>
                      <div className="request-tracker-services">
                        {(request.services || []).map((s) => (
                          <span key={s} className="request-tracker-chip">
                            {s}
                          </span>
                        ))}
                      </div>

                      {request.message ? (
                        <>
                          <h3 style={{ marginTop: 20 }}>Your message</h3>
                          <p className="request-tracker-summary" style={{ margin: 0 }}>
                            {request.message}
                          </p>
                        </>
                      ) : null}

                      {request.mapLink ? (
                        <>
                          <h3 style={{ marginTop: 20 }}>Location</h3>
                          <a href={request.mapLink} target="_blank" rel="noopener noreferrer" className="request-tracker-link-btn request-tracker-link-btn--solid" style={{ marginTop: 8 }}>
                            Open in Google Maps
                          </a>
                        </>
                      ) : null}
                    </div>

                    <DecisionCard request={request} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="request-tracker-footer-actions">
        <Link to="/contact" className="request-tracker-link-btn request-tracker-link-btn--solid">
          Contact support
        </Link>
        <Link to="/" className="request-tracker-link-btn">
          Back to home
        </Link>
      </div>

      <div className="request-tracker-lookup request-tracker-lookup--bottom">
        <h3 style={{ margin: 0, marginBottom: 14 }}>Optional: Track a specific request</h3>

        <div className="request-tracker-lookup-grid">
          <div className="request-tracker-field">
            <label htmlFor="rt-request-id">Request ID</label>
            <input id="rt-request-id" type="text" placeholder="e.g. REQ-001" value={requestId} onChange={(e) => setRequestId(e.target.value)} autoComplete="off" />
          </div>

          <div className="request-tracker-field">
            <label htmlFor="rt-contact">Phone or email</label>
            <input id="rt-contact" type="text" placeholder="(555) 123-4567 or you@email.com" value={contact} onChange={(e) => setContact(e.target.value)} autoComplete="email tel" />
          </div>
        </div>

        <div className="request-tracker-cta-wrap">
          <button type="button" className="request-tracker-btn-primary" onClick={onTrack} disabled={phase === 'loading'}>
            {phase === 'loading' ? 'Searching...' : 'Track request'}
          </button>
          {(requestId || contact) && phase !== 'loading' && (
            <button
              type="button"
              className="request-tracker-btn-ghost"
              onClick={() => {
                setRequestId('');
                setContact('');
                setPhase('idle');
                setFieldError('');
                setFocusId('');
              }}
            >
              Clear
            </button>
          )}
        </div>

        {phase === 'validationError' && fieldError && (
          <div className="request-tracker-alert request-tracker-alert--error" role="alert">
            {fieldError}
          </div>
        )}
        {phase === 'notFound' && (
          <div className="request-tracker-alert request-tracker-alert--error" role="alert">
            No request matched those details. Check your ID and that you used the same phone or email as on your form.
          </div>
        )}

        <p className="request-tracker-alert--hint">
          Demo: try <strong style={{ color: '#a5f3fc' }}>REQ-001</strong> with phone <strong style={{ color: '#a5f3fc' }}>(555) 123-4567</strong>,{' '}
          <strong style={{ color: '#a5f3fc' }}>REQ-003</strong> with <strong style={{ color: '#a5f3fc' }}>mike@example.com</strong>, or{' '}
          <strong style={{ color: '#a5f3fc' }}>REQ-005</strong> with <strong style={{ color: '#a5f3fc' }}>(555) 111-4444</strong>.
        </p>
      </div>
    </div>
  );
};

export default RequestStatusPage;
