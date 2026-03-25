import React, { useState } from 'react';
import './Events.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const dummyEvents = [
    {
        id: 1,
        title: 'Ugadi Celebration 2026',
        date: 'April 14, 2026',
        time: '10:00 AM - 4:00 PM',
        location: 'Victorian School of Languages',
        image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497',
        description: 'Join us for a grand celebration of the Kannada New Year. Cultural performances, traditional lunch, and more!',
        status: 'Upcoming',
        registrationOpen: true
    },
    {
        id: 2,
        title: 'Kannada Rajyotsava',
        date: 'November 1, 2026',
        time: '5:00 PM - 10:00 PM',
        location: 'Melbourne Town Hall',
        image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051',
        description: 'Come celebrate Kannada Rajyotsava with music, dance, and a special drama performance by local talents.',
        status: 'Upcoming',
        registrationOpen: false
    },
    {
        id: 3,
        title: 'Makar Sankranti Picnic',
        date: 'January 14, 2026',
        time: '11:00 AM - 4:00 PM',
        location: 'Jells Park',
        image: 'Our-Story4.png',
        description: 'A fun-filled family picnic to celebrate Makar Sankranti. Kite flying, traditional games, and potluck pot.',
        status: 'Past',
        registrationOpen: false
    },
    {
        id: 4,
        title: 'Diwali Gala Dinner 2025',
        date: 'November 10, 2025',
        time: '6:30 PM - 11:30 PM',
        location: 'Grand Vudha Convention',
        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40',
        description: 'A glowing night filled with lamps, delicious feasts, and an incredible fireworks presentation.',
        status: 'Past',
        registrationOpen: false
    }
];

const Events = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const upcomingEvents = dummyEvents.filter(event => event.status === 'Upcoming');
    const pastEvents = dummyEvents.filter(event => event.status === 'Past');

   

    // View Details Handler
    if (selectedEvent) {
        return (
            <div className="events-page-container">
                <div className="event-detail-modal">
                    <h2>{selectedEvent.title}</h2>
                    <img src={selectedEvent.image} alt={selectedEvent.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />
                    <p><FaCalendarAlt /> {selectedEvent.date} | <FaClock /> {selectedEvent.time}</p>
                    <p><FaMapMarkerAlt /> {selectedEvent.location}</p>
                    <p style={{ textAlign: 'left', marginTop: '20px', lineHeight: '1.6' }}>{selectedEvent.description}</p>

                    <div style={{ marginTop: '30px' }}>
                        {selectedEvent.registrationOpen ? (
                            <button className="view-details-btn">Register Now</button>
                        ) : selectedEvent.status === 'Upcoming' ? (
                            <p style={{ color: '#c62828', fontWeight: 'bold' }}>Registration Closed</p>
                        ) : null}
                    </div>

                    <button className="back-btn" onClick={() => setSelectedEvent(null)}>Back to Events list</button>
                </div>
            </div>
        );
    }

    return (
        <div className="events-page-container">
            <h1 className="events-page-title">MKS Events</h1>
            <div className="events-divider"></div>

            {/* Admin Panel Redesign */}
            {/* <div className="events-admin-panel">
                <div className="admin-header">
                    <div className="admin-header-title">
                        <FaCog className="admin-icon-main" />
                        <div>
                            <h3>Admin Dashboard</h3>
                            <p className="admin-subtitle">Manage MKS events, statuses, and registrations</p>
                        </div>
                    </div>
                </div>

                <div className="admin-actions-grid">
                    <button className="admin-card-btn primary" onClick={() => handleAdminAction('Create New Event')}>
                        <div className="icon-wrapper"><FaPlus /></div>
                        <div className="btn-text">
                            <span className="btn-title">Create Event</span>
                            <span className="btn-desc">Add a new upcoming event</span>
                        </div>
                    </button>

                    <button className="admin-card-btn secondary" onClick={() => handleAdminAction('Edit Event Details/Status')}>
                        <div className="icon-wrapper"><FaEdit /></div>
                        <div className="btn-text">
                            <span className="btn-title">Edit Details</span>
                            <span className="btn-desc">Modify event descriptions</span>
                        </div>
                    </button>

                    <button className="admin-card-btn secondary" onClick={() => handleAdminAction('Add/Change Image')}>
                        <div className="icon-wrapper"><FaEdit /></div>
                        <div className="btn-text">
                            <span className="btn-title">Update Image</span>
                            <span className="btn-desc">Add or change event flyer</span>
                        </div>
                    </button>

                    <button className="admin-card-btn outline" onClick={() => handleAdminAction('Change Status (Upcoming/Past)')}>
                        <div className="icon-wrapper"><FaCog /></div>
                        <div className="btn-text">
                            <span className="btn-title">Set Status</span>
                            <span className="btn-desc">Move to Past/Upcoming</span>
                        </div>
                    </button>

                    <button className="admin-card-btn outline" onClick={() => handleAdminAction('Toggle Registration')}>
                        <div className="icon-wrapper"><FaCog /></div>
                        <div className="btn-text">
                            <span className="btn-title">Registration</span>
                            <span className="btn-desc">Enable or disable forms</span>
                        </div>
                    </button>
                </div>
            </div> */}

            <div className="events-navigation">
                <button
                    className={activeTab === 'upcoming' ? 'active' : ''}
                    onClick={() => setActiveTab('upcoming')}
                >
                    Section 1: Upcoming Events
                </button>
                <button
                    className={activeTab === 'past' ? 'active' : ''}
                    onClick={() => setActiveTab('past')}
                >
                    Section 2: Past Events
                </button>
            </div>

            <div className="events-content">
                <h2 className="events-section-title">
                    {activeTab === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
                </h2>

                <div className="events-grid">
                    {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map(event => (
                        <div key={event.id} className="event-card-wrapper">
                            <img src={event.image} alt={event.title} className="event-image" />

                            <div className="event-details">
                                <span className={`event-status ${event.status === 'Upcoming' ? 'status-upcoming' : 'status-past'}`}>
                                    {event.status}
                                </span>
                                <h3 className="event-title">{event.title}</h3>
                                <div className="event-meta">
                                    <FaCalendarAlt /> <span>{event.date}</span>
                                </div>
                                <div className="event-meta">
                                    <FaMapMarkerAlt /> <span>{event.location}</span>
                                </div>

                                <p className="event-description">{event.description}</p>

                                <div className="event-footer">
                                    <button className="view-details-btn" onClick={() => setSelectedEvent(event)}>
                                        Event detail page
                                    </button>

                                    {event.status === 'Upcoming' && (
                                        <span className={`registration-badge ${event.registrationOpen ? 'reg-open' : 'reg-closed'}`}>
                                            {event.registrationOpen ? 'Registration: Open' : 'Registration: Disabled'}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {(activeTab === 'upcoming' && upcomingEvents.length === 0) && (
                        <p>No upcoming events at the moment.</p>
                    )}
                    {(activeTab === 'past' && pastEvents.length === 0) && (
                        <p>No past events recorded.</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Events;