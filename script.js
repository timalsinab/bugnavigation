document.addEventListener("DOMContentLoaded", function() {
    // Populate discussion area with content
    var discussionText = " Working on the Autonomous Navigation project proved to be both an exhilarating journey and a challenging puzzle. The main objective was to allow our MBot to navigate to a set destination autonomously, dodging any obstacles in its way. When we first read about the Bug Algorithm, it seemed like a logical progression from our hit_the_spot code. Little did we know that this would test our problem-solving skills in more ways than one. We began by understanding the existing codebase, and then we started coding. On our first few tries, our robot seemed a bit confused. It would either overshoot its destination or get obstructed by an obstacle. The challenges started mounting. During our coding sessions, we realized that our implementation of detecting obstacles needed a revision. The function findMinDistInSlice() became crucial in this, helping us discern the shortest ray in a specific slice of the Lidar scan. Bishal had the idea of using the minimum ray technique to determine if an obstacle lay on the robot's path to the goal. It was moments like these, filled with brainstorming and collaboration, that made the project so enjoyable.The ‘Robot Hits the Spot’ component required us to make the robot drive accurately to a designated position and angle, utilizing the robot's odometry. While it may sound straightforward, it was a bit like a game of darts where precision was of the essence. We went through several iterations(10 then 100 then 1000, then 250, then 35, and so forth), adjusting the algorithm, and conducting tests to ensure accuracy and that the robot actually stops when it is at the destination.Detecting obstacles was another fun challenge. We had to ensure that the robot could sense obstructions not just directly in its path but also in its immediate surroundings, ensuring a smoother detour around the obstacle, and the many ideas presented by our fellow classmates during the session with Jana from UMich were very insightful.In essence, this project was an immense learning curve. We had to design and implement several C++ functions, especially focusing on bug_navigation.cpp file. The hands-on approach of writing the code, testing it on the robot, and then tweaking it based on real-world performance made the learning exceptionally interactive.";
    document.getElementById("discussion-text").textContent = discussionText;
    discussionElement.style.color = "red";
});
