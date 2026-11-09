
let questions = [
    {
        question: "What must a driver with a New Jersey learner's permit have while driving?",
        image: "assets/studentdriver.jpeg",
        answers: [
            "A licensed supervising driver",
            "A second learner's permit",
            "A commercial driver's license",
            "No other person in the vehicle"
        ],
        correctAnswer: 0
    },
    {
        question: "What are the reflective GDL decals used for?",
        image: "assets/decals.jpeg",
        answers: [
            "To identify vehicles with special insurance",
            "To identify drivers with graduated licenses or permits",
            "To show that a vehicle passed inspection",
            "To identify commercial vehicles"
        ],
        correctAnswer: 1
    },
    {
        question: "How many points of identification are generally required for a standard New Jersey driver's license?",
        image: "assets/ID.jpeg",
        answers: [
            "Three",
            "Four",
            "Six",
            "Ten"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of these is part of the New Jersey driver testing process?",
        image: "assets/vision_test.png",
        answers: [
            "Vision testing",
            "A swimming test",
            "A mechanical repair test",
            "A highway construction test"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the road test?",
        image: "assets/road_test.jpeg",
        answers: [
            "To test how quickly a car can accelerate",
            "To evaluate your ability to drive safely",
            "To test your knowledge of car brands",
            "To measure your vehicle's fuel efficiency"
        ],
        correctAnswer: 1
    },
    {
        question: "Which documents must a motorist carry when operating a vehicle in New Jersey?",
        image: "assets/registration.jpeg",
        answers: [
            "Driver license, insurance card, and registration",
            "Passport, school ID, and vehicle receipt",
            "Birth certificate and vehicle title",
            "Only a driver's license"
        ],
        correctAnswer: 0
    },
    {
        question: "What should you do if you are involved in a motor vehicle crash?",
        image: "assets/crash.jpeg",
        answers: [
            "Leave immediately if your car still works",
            "Stop and fulfill your legal responsibilities",
            "Ignore the other driver",
            "Move on without checking for injuries"
        ],
        correctAnswer: 1
    },
    {
        question: "What should you do when approaching a pedestrian in a marked crosswalk?",
        image: "assets/walking.jpeg",
        answers: [
            "Speed up to pass first",
            "Honk and continue",
            "Stop and yield to the pedestrian",
            "Drive around the pedestrian"
        ],
        correctAnswer: 2
    },
    {
        question: "At an uncontrolled intersection, two vehicles arrive at the same time. Which vehicle generally has the right-of-way?",
        image: "assets/uncontrolled_intersection.jpeg",
        answers: [
            "The vehicle on the left",
            "The vehicle on the right",
            "The larger vehicle",
            "The faster vehicle"
        ],
        correctAnswer: 1
    },
    {
        question: "What should you do before entering a highway?",
        image: "assets/entering_highway.jpeg",
        answers: [
            "Stop at the end of the entrance ramp",
            "Match the flow of traffic when safe and yield to highway traffic",
            "Immediately move into the left lane",
            "Expect highway traffic to stop for you"
        ],
        correctAnswer: 1
    },
    {
        question: "What does a solid yellow line on your side of the road generally mean?",
        image: "assets/solidyellowlines.jpeg",
        answers: [
            "Passing is permitted at any time",
            "You should not pass",
            "The road is one-way",
            "Parking is permitted"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a safe way to maintain distance behind another vehicle?",
        image: "assets/3-seconds.jpeg",
        answers: [
            "Follow as closely as possible",
            "Use the three-second rule as a minimum guide in good conditions",
            "Stay exactly one car length behind at every speed",
            "Follow the vehicle's brake lights"
        ],
        correctAnswer: 1
    },
    {
        question: "What should you do before changing lanes?",
        image: "assets/change_lane.jpeg",
        answers: [
            "Signal, check your mirrors, and check your blind spot",
            "Only look straight ahead",
            "Accelerate without checking",
            "Rely only on your rearview mirror"
        ],
        correctAnswer: 0
    },
    {
        question: "How should you adjust your driving in heavy rain?",
        image: "assets/drivinginrain.jpeg",
        answers: [
            "Increase your speed",
            "Follow other vehicles more closely",
            "Reduce speed and increase following distance",
            "Use cruise control"
        ],
        correctAnswer: 2
    },
    {
        question: "What is defensive driving?",
        image: "assets/def_driving.png",
        answers: [
            "Driving aggressively to avoid delays",
            "Anticipating hazards and taking steps to prevent crashes",
            "Assuming other drivers will always follow the rules",
            "Driving only in the right lane"
        ],
        correctAnswer: 1
    },
    {
        question: "How can alcohol affect a person's ability to drive?",
        image: "assets/drink_n_drive.jpeg",
        answers: [
            "It improves reaction time",
            "It improves concentration",
            "It can impair judgment and coordination",
            "It makes driving safer at night"
        ],
        correctAnswer: 2
    },
    {
        question: "What should you do if you feel too tired to drive safely?",
        image: "assets/drowsy_driver.jpeg",
        answers: [
            "Open a window and keep driving",
            "Turn up the music",
            "Find a safe place to stop and rest",
            "Drive faster to reach your destination"
        ],
        correctAnswer: 2
    },
    {
        question: "What can happen if a driver accumulates too many motor vehicle points?",
        image: "assets/points.png",
        answers: [
            "The driver may face license suspension",
            "The driver automatically receives a new license",
            "The driver gets a free vehicle",
            "The driver's insurance becomes unnecessary"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the consequence of driving while your license is suspended?",
        image: "assets/suspension.png",
        answers: [
            "There are no consequences",
            "You may face additional penalties",
            "Your license automatically becomes permanent",
            "You are exempt from traffic laws"
        ],
        correctAnswer: 1
    },
    {
        question: "When passing a bicyclist, what should a driver do?",
        image: "assets/passing_bike.jpeg",
        answers: [
            "Pass as closely as possible",
            "Give the bicyclist adequate space and pass safely",
            "Honk continuously while passing",
            "Force the bicyclist off the road"
        ],
        correctAnswer: 1
    },
    {
        question: "Why should drivers avoid staying in a large truck's blind spots?",
        image: "assets/no_zone.jpeg",
        answers: [
            "The truck may not be able to see them",
            "Trucks cannot use their mirrors",
            "The truck always travels faster",
            "The truck is not allowed to change lanes"
        ],
        correctAnswer: 0
    },
    {
        question: "What should you do when an emergency vehicle approaches with its lights and siren activated?",
        image: "assets/emergency_vehicle.jpeg",
        answers: [
            "Race ahead of it",
            "Stop immediately in your lane",
            "Move over safely and allow it to pass",
            "Follow closely behind it"
        ],
        correctAnswer: 2
    },
    {
        question: "Why is it important to check your vehicle's tires regularly?",
        image: "assets/tire.jpeg",
        answers: [
            "To improve the vehicle's paint color",
            "To help maintain safe handling and traction",
            "To increase the vehicle's maximum speed",
            "To avoid using the brakes"
        ],
        correctAnswer: 1
    },
    {
        question: "What should you do if a warning light indicates a serious vehicle problem?",
        image: "assets/dashboardwarninglights.jpeg",
        answers: [
            "Ignore it until your next oil change",
            "Continue driving at a higher speed",
            "Follow the vehicle manual's guidance and address the problem safely",
            "Cover the warning light"
        ],
        correctAnswer: 2
    },
    {
        question: "What is one important way to reduce the risk of a crash?",
        image: "assets/distractions.jpeg",
        answers: [
            "Avoid distractions and keep your attention on driving",
            "Use your phone at red lights",
            "Drive faster than surrounding traffic",
            "Ignore road and weather conditions"
        ],
        correctAnswer: 0
    }
];
