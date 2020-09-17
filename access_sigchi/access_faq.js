//=================== EDIT THIS ===================

var data = {conference: "[Conference name]",
            city: "[City]",
            contact_name: "[Name of accessibility contact]",
            contact_role: "[Role of accessibility contact]",
            contact_email: "[Email of accessibility contact]",
            venue_type: "[Venue type (e.g., Hotel, Convention Center)]",
            venue_name: "[Venue name]",
            venue_phone: "[Venue telephone number]",
            venue_email: "[Venue email]",
            venue_contact: "[Venue manager]",
            venue_accessibility_url: "[URL to page with information on conference accessibility and related services]",
            city_access_url: "[URL to page with information on city accessibility resources]",
            city_access_info: "[Title for page with information on city accessibility]",
            city_access_contact: "[Who to contact for more information regarding the city's accessibility]",
            city_access_contact_phone: "[Phone for the city access contact]",
            city_access_contact_email: "[Email for the city access contact]",
            early_registration_deadline: "[Month Date, Year]",
            registration_question_label: "[Describe here any special accessibility or dietary needs.]",
            request_deadline: "[Month Date, Year]",
            airport: "[Name of nearest airport]",
            transport: "[By local_taxi_company_name Taxi.]",
            transport_options: [{name: "[local_taxi_company_name] Taxi",
                                 route: "From [airport_name] to [venue_name].",
                                 service_url: "[URL for local_taxi_company]",
                                 where_to_find: "[Describe here where to find taxis at the airport.]",
                                 cost:"[Cost of taking taxi from airport to venue]",
                                 time: "[Time it takes to go from the airport to the venue by Taxi.]",
                                 wheelchairs: "[Describe here which type of wheelchair (manual or powered wheelchair) and how many the taxis can take, and if the taxis are equipped with a ramp. Also, please indicate if some models can accommodate larger power scooters and if these models need to be reserved in advance.]",
                                 walking: "[Provide walking directions to the taxi rank here. Also, please indicate where the taxis drop off passengers around the venue (main entrance of hotel lobby).]",
                                 steps: "[Indicate here if there are any steps required to get to the taxi rank or from the taxi into the venue.]",
                                 service_animals: "[Indicate here if guide dogs and other service animals are welcome, and if they need to make a reservation.]",
                                 service_phone: "[Indicate here the telephone number for the local_taxi_company.]",
                                 book: "[Indicate here if and how participants should book a taxi. For example: Call (+65) 6589 8551 48 hours in advance to book a taxi.]"}],
            level: "[Indicate here in which floor(s) the conference will take place.]",
            lunch_room: "[Indicate here where the lunch will take place.]",
            session_room: "[Indicate here where the conference sessions will be held (which rooms or halls).]",
            offsite_events: false, //true if there are any offsite events,
            catering_contact: "[Catering contact]",
            catering_contact_email: "[Email of catering contact]",
            pet_relief_area: "[Indicate here where the pet relief areas are, if any.]",
            number_for_emergencies: "[Indicate here the number to call in case of an emergency.]",
            hospital_distance: "[Indicate here how far away is the nearest hospital.]",
            assistant_policy: "[Indicate here your policy with regards to assistants or companions. Must they register for the conference? Is there a reduced 'companion rate' available?]",
            map_available: false, //true if there is a map of the venue available,
            map_url: "[URL to map or floor plan of venue. Example: http://assets.sheratoninnerharbor.com/lps/assets/u/Sheraton-Inner-Harbor-Hotel-Second-Floor--Floor-Plan.png]",
            space_description: "[Example of the textual description of the conference space for a small event in a hotel: The conference is spread across two adjacent rooms. The main session will be held in the Harborview Ballroom, breaks will be held in the foyer outside this room, and lunches and poster sessions will be in the adjacent Harborview Gallery. Wheelchair accessible restrooms are located on this level to the left of the Harborview Gallery. The registration desk will be adjacent to the elevators, on the left. The foyer features several lounge chairs but is not a quiet area. The distance from the registration desk to the Harborview Ballroom is approx. 100ft. There is no quiet, private area nearby for attendees to use. Please contact us if you are planning to attend the conference and may need such a space.]",
            restroom_description: "[Indicate here where the nearest restrooms are in relation to the main conference space and how they can be reached - both Women's and Men's restrooms. Also, please indicate if there are any steps between the conference space and the restrooms. Please include any other pertinent details about the restroom, such as: how many wheelchair accessible stalls with grab bars are there in each restroom? Are the restrooms equipped with automatically opening double doors? How wide are the doors and/or how wide they open (90 or 180 degrees)?]",
                stage_description: "[Indicate here where the session presentations will take place and if there will be a stage. Indicate if the stage is raised (include measurements: height and depth) and if there are steps (how many), guard rails, and/or a ramp (and on which side they are located). Also, please indicate where presenters will stand and if there will be a podium and where.]",
                walking_description: "[Indicate here an estimate of how much walking the attendees will have to do for the conference and if there is seating available nearby. Example: The conference will require minimal walking as all sessions are in a single room with lunch and poster sessions next-door. The conference rooms are 50 feet from the elevator. A limited amount of seating will be available during break and poster sessions.]",
            offsite_walking_description: "[Provide here walking directions to the offsite events. Include details about the distance, the terrain (hills? how steep? uneven sidewalks?), the location of the offstie event (will there be seating available?), and other transportation options (will there be taxis available for those who do not wish to walk?).]",
            wheelchair_access: false, // true if the venue is wheelchair accessible,
            wheelchair_access_description: "[Describe here what the venue's wheelchair accessibility is like. Example: The hotel has a level entrance with automatic doors. The reception desk has a lowered section for wheelchair users, and the route to the elevators is level. The elevators lead to the guest and meeting rooms. Three wheelchair-accessible guest rooms are available, each with a walk-in shower and grab rails. The meeting room will have wheelchair spaces by the central aisle at the back of the room. Student volunteers will be available on request to help with the lunch buffet, and there will be space for wheelchairs at the lunch tables.]",
            wheelchair_presenter_description: "[Describe here the details about wheelchair accessibility that pertain to presenters who use wheelchairs. Example: We do not at this time have a ramp on to the stage. If you are a presenter who uses a wheelchair, please contact Name_of_accessibility_contact (Email_of_accessibility_contact) as soon as possible so that we can make arrangements. After this_date we cannot guarantee to be able to provide a ramp. Poster sessions will have space for a wheelchair to move between the posters.]",
            offsite_wheelchair_description: "[Describe here how to access any offsite events via wheelchair (if possible): The walking route to the reception is passable by wheelchair but steep and rough with several curbs that do not have curb cuts. We recommend using the local taxi service ABC Taxi whose cabs can accommodate one manual or power wheelchair. If you wish to attend the reception with a power scooter, please contact Erin Buehler and indicate this on your registration form. The reception venue is wheelchair accessible except for two steps up to the main entrance. Student volunteers will be available on request to assist wheelchair users with these steps. The venue has accessible restrooms near the reception area.]",
            robot: false, //true if there will be any robots available for virtual or remote attendees,
            nrobots: "[Indicate here the number of robots that will be available.]",
            food: "[Indicate here what sort of meals will be available and/or provided at the conference along with details of when and/or where.]",
            smoke_free_areas: "[Indicate here where the smoking-free areas will be.]",
            smoking_areas: "[Indicate here where the smoking areas will be, if any.]",
            induction_loop_areas: "[Indicate here which rooms or areas have an induction loop.]",
            no_induction_loop_areas: "[Indicate here which rooms or areas do not have an induction loop.]",
            mikes_for_speakers: false, // true if there will be mikes available for speakers,
            mikes_for_questions: false, // true if there will be mikes available for questions
           };

//================== END EDITS ==================

var template = `<h1>{{conference}} Accessibility FAQ</h1>

    <p>{{conference}} is committed to providing an inclusive environment and we will do our best to accommodate
    requests for special assistance. This page describes the accessibility features of {{conference}}, to help
    you make an informed decision about whether the conference will be accessible to you. Please contact us if
    your question is not answered here, or if the conference arrangements as described are not enough to allow
    you to attend. We will work with you to the best of our ability, to make the conference accessible.</p>

    <h2><a name="q">Contents</a></h2>

    <ul>
        <li><a href=#q1>How do I communicate accessibility needs to {{conference}} organizers?</a></li>
        <li><a href=#q2>Who do I ask if my question is not answered here?</a></li>
        <li><a href=#q3>Will sign language interpretation or captioning be available?</a></li>
        <li><a href=#q4>What are the taxi and public transport options for getting to the conference
        venue?</a></li>
        <li><a href=#q19>Who can I ask about accessibility in {{city}}?</a></li>
        <li><a href=#q5>Can a student volunteer assist me during the conference?</a></li>
        <li><a href=#q6>What is the conference space like?</a></li>
        <li><a href=#q7>Will the conference be accessible by wheelchair or power scooter?</a></li>
        <li><a href=#q17>What are the restroom facilities like?</a></li>
        <li><a href=#q18>What are the arrangements for presenters with accessibility needs?</a></li>
        <li><a href=#q8>Can I bring my guide dog?</a></li>
        <li><a href=#q9>Can I attend the conference by robot?</a></li>
        <li><a href=#q10>How much walking or standing will be needed?</a></li>
        <li><a href=#q11>Will there be an induction loop in the meeting rooms?</a></li>
        <li><a href=#q12>Will speakers and audience members asking questions be using a microphone?</a></li>
        <li><a href=#q13>What food service will be provided?</a></li>
        <li><a href=#q14>Can the conference accommodate special dietary needs?</a></li>
        <li><a href=#q15>Will the conference be a smoke-free environment?</a></li>
        <li><a href=#q16>What if I have a medical emergency or health problem during the conference?</a></li>
    </ul>

    <br><br>

    <h2><a name="q1">How do I communicate accessibility needs to {{conference}} organizers?</a></h2>

    <p>The {{contact_role}} for {{conference}} is {{contact_name}}, whose goal is to ensure the conference is
    accessible to everyone. When you register for the conference, there will be a registration question
    labeled "{{registration_question_label}}". In your response, please indicate any accessibility needs
    such as wheelchair access, sign language interpretation, or a guide. The {{contact_role}} will follow
    up with you to clarify your needs. You can contact them directly at any time by emailing
    <a href="mailto:{{contact_email}}">{{contact_email}}</a>.</p>

    <h2><a name="q2">Who do I ask if my question is not answered here?</a></h2>

    <p>For more detailed information about accessibility at {{venue_name}} please {{#venue_accessibility_url}}
    check the <a href="{{venue_accessibility_url}}">venue accessibility information page</a> or
    {{/venue_accessibility_url}} contact {{venue_contact}} on <a href="tel:{{venue_phone}}">{{venue_phone}}</a>
    or email <a href="mailto:{{venue_email}}">{{venue_email}}</a>.</p>

    <p>If there is specific accessibility information you would like to see here, or if you wish to discuss
    any accessibility requirements, please contact our {{contact_role}}, {{contact_name}} by email:
    <a href="mailto:{{contact_email}}">{{contact_email}}</a>, and someone will respond to you shortly.</p>

    <h2><a name="q3">Will sign language interpretation or captioning be available?</a></h2>

    <p>The conference will provide a team of sign language interpreters or captioners if requested by any
    attendees during the early registration period. Please make your request as early as possible. Our
    {{contact_role}} will follow up with you to discuss your needs in more detail. After
    {{early_registration_deadline}} (the deadline for early registration), a best effort will be made to
    accommodate requests, but we cannot guarantee that interpreters or captioners will be available.</p>

    <h2><a name="q4">What are the taxi and public transport options for getting to the conference
    venue?</a></h2>

    <p>From {{airport}}, the easiest way to get to the {{venue_name}} is {{transport}}</p>

    <!--
        COMMENT: The description of each public transport option should include:
        Link to web page for accessibility information provided by the service itself.
        Contact email, phone and TTY numbers for the service.
        Where to find it in the airport.
        How much it costs.
        Whether the service is accessible for people using manual or larger powered wheelchairs.
        Whether the service is accessible to a person using a larger electric scooter.
        Whether wheelchair users need to call ahead to reserve.
        Whether the service requires walking a long distance or up and down steps.
        Whether service animals are accepted.
        How long the journey typically takes.
        Where the service drops passengers relative to the conference venue.
        How to get from the dropping-off point to the conference venue in a wheelchair,
        or without using steps, and how far it is to walk.
    -->

    <p>Recommended options for getting to the conference include:</p>

    {{#transport_options}}
        <h3><a href="{{service_url}}">{{name}}</a></h3>
        <ul>
            <li><strong>Route</strong>: {{route}}</li>
            <li><strong>Pickup point</strong>: {{where_to_find}}</li>
            <li><strong>Cost</strong>: {{cost}}</li>
            <li><strong>Time</strong>: {{time}}</li>
            <li><strong>Wheelchair accessibility</strong>: {{wheelchairs}}</li>
            <li><strong>Walking and steps</strong>: {{walking}} {{steps}}</li>
            <li><strong>Service animals</strong>: {{service_animals}}</li>
            <li><strong>Phone</strong>: <a href="tel:{{service_phone}}">{{service_phone}}</a></li>
            <li><strong>Book</strong>: {{book}}</li>
        </ul>
    {{/transport_options}}

    <h2><a name="q19">Who can I ask about accessibility in {{city}}?</a></h2>

    <p>For information about {{city}} accessibility, including public transport, go to
    <a href="{{city_access_url}}">{{city_access_info}}</a> or contact
    {{city_access_contact}} at <a href="tel:{{venue_phone}}">{{city_access_contact_phone}}</a> or
    <a href="mailto:{{venue_email}}">{{city_access_contact_email}}</a>.</p>

    <h2><a name="q5">Can a student volunteer assist me during the conference?</a></h2>

    <p>Student volunteers will be available to assist attendees with disabilities with navigation, meal service,
    or other accessibility needs. If you will need volunteer assistance at the conference, please indicate this
    on your conference registration form.</p>

    <p>Attendees who require personal care assistance should bring their own assistant. {{assistant_policy}}</p>

    <h2><a name="q6">What is the conference space like?</a></h2>

    <!--
        COMMENT: This section should provide a map of the conference space that shows the following information:
        - the location of stairs, escalators, elevators, restrooms and wheelchair-accessible restrooms.
        - walking distance between sessions and need to use stairs.
        - places to sit and rest.
        - whether there will be a quiet place where hard of hearing people can talk.
        - whether there will be a private room where an attendee could rest or nurse a baby.
        - where a guide dog can be taken to relieve itself.

        COMMENT: For the benefit of those who cannot see the map, a textual description should also be included.
        Here’s an example of what this description might look like for a small event in a hotel:
    -->

    {{#map_available}}
        <p>For the overall layout of the venue, please refer to this <a href="{{map_url}}">map of the conference
        space</a>.</p>
    {{/map_available}}

    <p>All conference events are on the {{level}} of the {{venue_type}}. {{space_description}}</p>

    <p>Please see our other FAQs for more details about <a href=#q7>wheelchair or power scooter access</a>,
    <a href="#q18">provisions for presenters</a>, <a href="#q17">restrooms</a>,
    <a href="#q10">walking and steps</a>, and <a href="#q8">facilities for assistance animals</a>.</p>

    <h2><a name="q7">Will the conference be accessible by wheelchair or power scooter?</a></h2>

    <!--
        COMMENT: This section should provide information for wheelchair and power scooter users, including:
        - wheelchair access routes into the conference venue.
        - wheelchair route from the entrance or lobby to the meeting rooms and/or guest accommodation.
        - if venue is a hotel - wheelchair route from the hotel rooms to the meeting space.
        - location of wheelchair-accessible restrooms.
        - warnings about any steps or stairs between conference locations.
        - where to get more detailed information about accessibility at the venue.
        - if there will be a raised stage, will there be a ramp onto it?
        - wheelchair access and transportation for any offsite events.
    -->

    <p>
        {{#wheelchair_access}}
            Yes, the conference will be accessible to wheelchair users. {{wheelchair_access_description}}
        {{/wheelchair_access}}
        {{^wheelchair_access}}
            Wheelchair users will face challenges attending {{conference}}. {{wheelchair_access_description}}
        {{/wheelchair_access}}
    </p>

    <p>{{wheelchair_presenter_description}}</p>

    <p>For more information about wheelchair accessibility at {{venue_name}}, please contact the {{venue_contact}}
    on <a href="tel:{{venue_phone}}">{{venue_phone}}</a> or
    <a href="mailto:{{venue_email}}">{{venue_email}}</a>.</p>


    {{#offsite_events}}
        <p>{{offsite_wheelchair_description}}</p>
    {{/offsite_events}}

    <h2><a name="q17">What are the restroom facilities like?</a></h2>

    <p>{{restroom_description}}</p>

    <h2><a name="q18">What are the arrangements for presenters with accessibility needs?</a></h2>

    <p>{{stage_description}}</p>

    <p>{{wheelchair_presenter_description}}</p>

    <p>If you would like a student volunteer to operate slides or guide you onto and off the stage,
    or have other accessibility requests please contact {{contact_name}} at
    <a href="mailto:{{contact_email}}">{{contact_email}}</a> by {{request_deadline}}.</p>

    <h2><a name="q8">Can I bring my guide dog?</a></h2>

    <p>Yes! Guide dogs and other service animals are welcome at {{conference}}. There will be a relief area with
    water available {{pet_relief_area}}. Please indicate on your registration form if you anticipate bringing a
    service animal to the conference.</p>

    <h2><a name="q9">Can I attend the conference by robot?</a></h2>

    {{#robot}}
        <p>The conference can accommodate up to {{nrobots}} virtual attendees, and slots will be allocated on a
        first-come-first-served basis. Please contact {{contact_name}} at
        <a href="mailto:{{contact_email}}">{{contact_email}}</a> to reserve a space. You must make your own
        arrangements to have the robot shipped to and from the conference, and pay a reduced registration fee to
        cover conference participation and robot handling. Robot attendees will be able to move freely around the
        poster and break sessions. During main presentations, robots should be positioned at the side of the room
        near the front so as not to block the view for other participants.</p>

        {{#offsite_events}}
            <p>Robots will not be transported to the offsite events, as there will be no Internet connectivity at
            these locations.</p>
        {{/offsite_events}}
    {{/robot}}

    {{^robot}}
        <p>We are sorry, but {{conference}} will not be able to accommodate remote attendance by robot.</p>
    {{/robot}}

    <h2><a name="q10">How much walking or standing will be needed?</a></h2>

    <!--
        COMMENT: This section should describe:
        - how far it is from the conference space to the elevator,
        - how far to the nearest accessible bathroom, and
        - mention any ramp that is needed to move between parts of the space.
    -->

    {{#walking_description}}
        <p>{{walking_description}}</p>
    {{/walking_description}}
    {{#offsite_events}}
        {{#offsite_walking_description}}
            <p>{{offsite_walking_description}}</p>
        {{/offsite_walking_description}}
    {{/offsite_events}}

    <p>Please contact {{contact_name}} at <a href="mailto:{{contact_email}}">{{contact_email}}</a>
    as early as possible if you have further questions or special requests.</p>

    <h2><a name="q11">Will there be an induction loop in the meeting rooms?</a></h2>

    <p>
        {{#induction_loop_areas}}
        {{induction_loop_areas}}
        {{/induction_loop_areas}}
        {{#no_induction_loop_areas}}
        {{no_induction_loop_areas}}
        {{/no_induction_loop_areas}}
    </p>

    <h2><a name="q12">Will speakers and audience members asking questions be using a microphone?</a></h2>

    <p>
        {{#mikes_for_speakers}}
            Yes, microphones will be used for all speakers.
        {{/mikes_for_speakers}}
        {{^mikes_for_speakers}}
            No, speakers will not be using microphones.
        {{/mikes_for_speakers}}
        {{#mikes_for_questions}}
            Attendees with questions will be requested to use a microphone so that their question is more easily
            heard.
        {{/mikes_for_questions}}
        {{^mikes_for_questions}}
            There will not be a microphone for attendees, but speakers will be asked to repeat questions from the
            audience.
        {{/mikes_for_questions}}
    </p>

    <h2><a name="q13">What food service will be provided?</a></h2>

    <p>The conference will provide {{food}}. Dishes will be labeled. For more detailed information please contact
    {{catering_contact}} at <a href="mailto:{{catering_contact_email}}">{{catering_contact_email}}</a>.
    If you have special dietary needs, please indicate these clearly on your registration form.</p>

    <h2><a name="q14">Can the conference accommodate special dietary needs?</a></h2>

    <p>Yes. Attendees who indicate special dietary requirements on their registration form will be provided with
    special meals when the conference catering does not accommodate them. If you have a severe allergy please
    indicate this on your registration form. For more detailed information please contact {{catering_contact}} at
    at <a href="mailto:{{catering_contact_email}}">{{catering_contact_email}}</a>.</p>

    <h2><a name="q15">Will the conference be a smoke-free environment?</a></h2>

    <p>
        {{#smoke_free_areas}}
        {{smoke_free_areas}}
        {{/smoke_free_areas}}
        {{#smoking_areas}}
        {{smoking_areas}}
        {{/smoking_areas}}
    </p>

    <h2><a name="q16">What if I have a medical emergency or health problem during the conference?</a></h2>

    <p>In case of emergency call <a href="tel:{{number_for_emergencies}}">{{number_for_emergencies}}</a> for an
    ambulance. The nearest hospital is {{hospital_distance}} away. If you require non-urgent medical care, please
    contact {{contact_name}} at <a href="mailto:{{contact_email}}">{{contact_email}}</a> or ask any student
    volunteer. They will provide you with information about local doctors, specialists, chiropractors, etc. For
    non-resident attendees, buying travel insurance that covers medical expenses is strongly recommended as fees
    for emergency treatment can be very high.</p>

    <br><br>

    <hr>

    <p>This FAQ has been generated from a template provided by <a href="http://www.sigaccess.org">ACM SIGACCESS</a>.
    Event organizers are welcome to modify and reuse this template for other events.
    Please contact SIGACCESS for more information.</p>
`;

function generateFAQ() {
    var output = Mustache.render(template, data);
    document.getElementById('access_faq').innerHTML = output;
}
generateFAQ();
