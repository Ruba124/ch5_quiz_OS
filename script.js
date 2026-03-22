const quizData = [
    // --- 35 AVERAGE QUESTIONS ---
    { q: "What is the primary goal of multiprogramming regarding the CPU?", a: ["Minimum cost", "Maximum utilization", "Maximum power consumption", "Minimum memory use"], c: 1, exp: "Maximum CPU utilization is obtained with multiprogramming.", slide: 2 },
    { q: "A process cycle consists of which two alternating states?", a: ["Running and Ready", "CPU execution and I/O wait", "Load and Store", "Dispatch and Latency"], c: 1, exp: "Process execution consists of a cycle of CPU execution and I/O wait.", slide: 2 },
    { q: "What follows a CPU burst in the burst cycle?", a: ["Another CPU burst", "Process termination", "I/O burst", "Context switch"], c: 2, exp: "A CPU burst is followed by an I/O burst.", slide: 2 },
    { q: "A histogram of CPU-burst times typically shows:", a: ["Equal number of long and short bursts", "A large number of short bursts", "A large number of long bursts", "Only one single long burst"], c: 1, exp: "CPU-burst distribution generally shows a large number of short bursts and a small number of longer bursts.", slide: 3 },
    { q: "Where does the CPU scheduler select processes from?", a: ["Waiting queue", "Ready queue", "Device queue", "Job pool"], c: 1, exp: "The CPU scheduler selects from among the processes in the ready queue.", slide: 4 },
    { q: "In which case is a scheduling decision considered nonpreemptive?", a: ["Switch from waiting to ready", "Switch from running to ready", "When a process terminates", "When a process is interrupted"], c: 2, exp: "Scheduling under running to waiting (1) and termination (4) is nonpreemptive.", slide: 4 },
    { q: "Which module gives control of the CPU to the selected process?", a: ["The Scheduler", "The Dispatcher", "The Kernel", "The PCB"], c: 1, exp: "The Dispatcher module gives control of the CPU to the process selected by the short-term scheduler.", slide: 5 },
    { q: "What is 'Dispatch Latency'?", a: ["Time to execute a process", "Time to load a process into memory", "Time to stop one process and start another", "Time spent in the ready queue"], c: 2, exp: "Dispatch latency is the time it takes for the dispatcher to stop one process and start another.", slide: 5 },
    { q: "Which criterion refers to keeping the CPU as busy as possible?", a: ["Throughput", "Turnaround time", "CPU utilization", "Waiting time"], c: 2, exp: "CPU utilization means keeping the CPU as busy as possible.", slide: 6 },
    { q: "The number of processes that complete execution per time unit is:", a: ["Utilization", "Latency", "Throughput", "Response time"], c: 2, exp: "Throughput is the number of processes that complete their execution per time unit.", slide: 6 },
    { q: "What time measure calculates the interval from submission to completion?", a: ["Waiting time", "Response time", "Turnaround time", "Burst time"], c: 2, exp: "Turnaround time is the amount of time to execute a particular process.", slide: 6 },
    { q: "Waiting time is the total time spent in which location?", a: ["CPU", "I/O device", "Ready queue", "The entire system"], c: 2, exp: "Waiting time is the amount of time a process has been waiting in the ready queue.", slide: 6 },
    { q: "Response time is most important in which environment?", a: ["Batch systems", "Real-time systems", "Time-sharing environments", "Mobile apps"], c: 2, exp: "Response time is the time from request submission until the first response is produced (for time-sharing).", slide: 6 },
    { q: "To optimize scheduling, you should MINIMIZE which of these?", a: ["Throughput", "CPU utilization", "Response time", "Gantt charts"], c: 2, exp: "Optimization criteria include minimizing turnaround, waiting, and response time.", slide: 7 },
    { q: "FCFS scheduling uses which data structure?", a: ["Stack", "Priority queue", "FIFO queue", "Binary tree"], c: 2, exp: "First-Come, First-Served is the simplest and uses a FIFO queue.", slide: 8 },
    { q: "What is the average waiting time for P1(24), P2(3), P3(3) arriving in that order (FCFS)?", a: ["3", "17", "24", "30"], c: 1, exp: "(0 + 24 + 27) / 3 = 17.", slide: 8 },
    { q: "What is the average waiting time for P1(24), P2(3), P3(3) arriving as P2, P3, P1 (FCFS)?", a: ["3", "17", "6", "0"], c: 0, exp: "(0 + 3 + 6) / 3 = 3.", slide: 9 },
    { q: "The 'Convoy Effect' occurs when:", a: ["Short processes are behind a long process", "CPU is under-utilized", "I/O is too fast", "Memory is full"], c: 0, exp: "Convoy effect means short processes are stuck behind a long process.", slide: 9 },
    { q: "Which algorithm gives the minimum average waiting time?", a: ["FCFS", "Round Robin", "SJF", "Priority"], c: 2, exp: "SJF is optimal and gives the minimum average waiting time.", slide: 10 },
    { q: "What is the main difficulty in implementing SJF?", a: ["Context switching", "Knowing the length of the next CPU request", "Ordering the queue", "I/O interrupts"], c: 1, exp: "The difficulty is knowing the length of the next CPU request.", slide: 10 },
    { q: "In SJF, if P1(6), P2(8), P3(7), P4(3) are in the queue, who runs first?", a: ["P1", "P2", "P3", "P4"], c: 3, exp: "P4 runs first because it has the shortest burst (3).", slide: 11 },
    { q: "How can the OS predict the next CPU burst length?", a: ["User input", "Linear regression", "Exponential averaging", "Random guess"], c: 2, exp: "Prediction is done using the length of previous CPU bursts with exponential averaging.", slide: 12 },
    { q: "In the formula τ(n+1) = α t(n) + (1-α)τ(n), what does τ(n) represent?", a: ["Actual burst", "Previous prediction", "Next prediction", "Constant weight"], c: 1, exp: "τ(n) is the predicted value for the previous CPU burst.", slide: 12 },
    { q: "What is the preemptive version of SJF called?", a: ["Round Robin", "Shortest-Remaining-Time-First", "First-In-First-Out", "Priority Scheduling"], c: 1, exp: "Preemptive SJF is called shortest-remaining-time-first.", slide: 12 },
    { q: "If α = 0 in exponential averaging, what counts?", a: ["Only the last burst", "Recent history does not count", "Everything counts equally", "The system crashes"], c: 1, exp: "If α = 0, recent history does not count (τ(n+1) = τ(n)).", slide: 13 },
    { q: "In Round Robin, each process gets a unit of time called a:", a: ["Slice", "Quantum", "Tick", "Burst"], c: 1, exp: "Each process gets a small unit of CPU time (time quantum q).", slide: 15 },
    { q: "What happens to a process in RR after its time quantum expires?", a: ["It terminates", "It enters waiting state", "It is preempted and added to the end of the queue", "It blocks"], c: 2, exp: "After the time has elapsed, the process is preempted and added to the end of the ready queue.", slide: 15 },
    { q: "If there are 5 processes and q=10, what is the max waiting time for any process in RR?", a: ["10", "40", "50", "0"], c: 1, exp: "No process waits more than (n-1)q = (5-1)*10 = 40.", slide: 15 },
    { q: "What does RR become if the time quantum 'q' is extremely large?", a: ["SJF", "FCFS", "Priority", "LWP"], c: 1, exp: "If q is large, RR behaves like FCFS (FIFO).", slide: 15 },
    { q: "In priority scheduling, a smaller integer usually represents:", a: ["Lower priority", "Higher priority", "Longer burst", "Error code"], c: 1, exp: "Smallest integer usually means the highest priority.", slide: 18 },
    { q: "What is the problem where low priority processes never execute?", a: ["Convoy effect", "Starvation", "Context switch", "Aging"], c: 1, exp: "Starvation occurs when low priority processes never execute.", slide: 18 },
    { q: "What is the solution to starvation?", a: ["Preemption", "Aging", "Multiprocessing", "SJF"], c: 1, exp: "Aging is the solution, increasing priority as time progresses.", slide: 18 },
    { q: "A Multilevel Queue usually partitions the queue into:", a: ["Fast and Slow", "Foreground and Background", "Kernel and User", "Read and Write"], c: 1, exp: "The queue is partitioned into foreground (interactive) and background (batch).", slide: 21 },
    { q: "Which scheduling algorithm is typically used for the foreground (interactive) queue?", a: ["FCFS", "SJF", "Round Robin", "LWP"], c: 2, exp: "Foreground usually uses RR.", slide: 21 },
    { q: "How can a process move between various queues in a multilevel system?", a: ["Multilevel Queue", "Multilevel Feedback Queue", "FCFS", "Priority Switch"], c: 1, exp: "A Multilevel Feedback Queue allows processes to move between queues.", slide: 24 },

    // --- 15 HARD QUESTIONS ---
    { q: "In the multilevel feedback queue example, where does a new job enter?", a: ["Q0", "Q1", "Q2", "The Kernel"], c: 0, exp: "A new job enters queue Q0 served FCFS with quantum 8.", slide: 25 },
    { q: "What happens if a job in Q0 does not finish in 8ms in the feedback model?", a: ["Terminated", "Moved to Q1", "Re-enters Q0", "Moved to Q2"], c: 1, exp: "If it doesn't finish, it is moved to queue Q1.", slide: 25 },
    { q: "What is the scheduling algorithm for the final queue (Q2) in the feedback example?", a: ["RR", "SJF", "FCFS", "Priority"], c: 2, exp: "The last queue Q2 uses FCFS.", slide: 25 },
    { q: "When threads are supported, what does the OS schedule?", a: ["Processes", "Threads", "LWPs", "Cores"], c: 1, exp: "When threads are supported, threads are scheduled, not processes.", slide: 26 },
    { q: "On systems with many-to-many models, what does the thread library schedule user threads onto?", a: ["CPU", "Registers", "LWPs", "Main memory"], c: 2, exp: "The library schedules user-level threads onto LWPs.", slide: 26 },
    { q: "What is Process-Contention Scope (PCS)?", a: ["Competition among all threads", "Scheduling competition within the process", "Competition between kernel and user", "CPU vs I/O"], c: 1, exp: "PCS is scheduling competition within the process.", slide: 26 },
    { q: "What is System-Contention Scope (SCS)?", a: ["Internal process scheduling", "Competition among all threads in the system", "Windows vs Linux", "LWP scheduling"], c: 1, exp: "SCS is competition among all threads in the system.", slide: 26 },
    { q: "Which contention scope do Linux and macOS exclusively allow?", a: ["PCS", "SCS", "Many-to-Many", "LWP"], c: 1, exp: "Linux and macOS only allow PTHREAD_SCOPE_SYSTEM (SCS).", slide: 27 },
    { q: "Which Pthread function is used to set the contention scope?", a: ["pthread_attr_init", "pthread_attr_setscope", "pthread_create", "pthread_join"], c: 1, exp: "pthread_attr_setscope is used to set the contention scope policy.", slide: 28 },
    { q: "What does PTHREAD_SCOPE_PROCESS represent?", a: ["SCS", "PCS", "Kernel scheduling", "LWP creation"], c: 1, exp: "PTHREAD_SCOPE_PROCESS schedules threads using PCS.", slide: 27 },
    { q: "What value is returned by pthread_attr_getscope if an error occurs?", a: ["0", "1", "Non-zero", "-1"], c: 2, exp: "If an error occurs, these functions return a non-zero value.", slide: 28 },
    { q: "In the Pthread API example, what is the first step before checking scope?", a: ["Create thread", "Initialize attributes (pthread_attr_init)", "Join thread", "Set priority"], c: 1, exp: "The code first calls pthread_attr_init(&attr).", slide: 29 },
    { q: "In a multilevel queue, what is the fixed priority scheduling risk?", a: ["Context switch overhead", "Starvation", "Convoy effect", "Throughput drop"], c: 1, exp: "Fixed priority scheduling between queues can lead to starvation.", slide: 21 },
    { q: "How much CPU time is given to the background in the time-slice example?", a: ["80%", "20%", "50%", "100%"], c: 1, exp: "The example shows 20% to the background in FCFS.", slide: 21 },
    { q: "What does the dispatcher do during context switching?", a: ["Calculates burst time", "Saves state into PCB0 and restores from PCB1", "Changes the process priority", "Clears the ready queue"], c: 1, exp: "It involves saving state into PCB0 and restoring state from PCB1.", slide: 5 }
];

function loadQuiz() {
    const container = document.getElementById('quiz-container');
    quizData.forEach((item, index) => {
        const block = document.createElement('div');
        block.className = 'question-block';
        block.innerHTML = `
            <span class="question-text">${index + 1}. ${item.q}</span>
            <div class="options" id="options-${index}">
                ${item.a.map((opt, i) => `
                    <label id="label-${index}-${i}">
                        <input type="radio" name="q${index}" value="${i}" onclick="checkAnswer(${index}, ${i})"> ${opt}
                    </label>
                `).join('')}
            </div>
            <button class="explanation-btn" onclick="toggleExp(${index})">View Explanation</button>
            <div id="exp${index}" class="explanation">
                <strong>Why?</strong> ${item.exp}<br>
                <strong>Slide Reference:</strong> Page ${item.slide}
            </div>
        `;
        container.appendChild(block);
    });
}

function checkAnswer(qIdx, sIdx) {
    const correct = quizData[qIdx].c;
    const labels = document.querySelectorAll(`#options-${qIdx} label`);
    const inputs = document.querySelectorAll(`#options-${qIdx} input`);
    
    inputs.forEach(input => input.disabled = true); // Lock the question

    labels.forEach((label, i) => {
        if (i === correct) {
            label.classList.add('correct-answer');
        } else if (i === sIdx) {
            label.classList.add('wrong-answer');
        }
    });
}

function toggleExp(id) {
    const el = document.getElementById(`exp${id}`);
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}

function calculateScore() {
    let score = 0;
    quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === item.c) score++;
    });
    
    document.getElementById('score-display').innerText = score;
    document.getElementById('results').classList.remove('hidden');
    
    const feedback = document.getElementById('feedback');
    if (score === 50) feedback.innerText = "Master of Scheduling! Ruba, you are ready for the exam!";
    else if (score > 40) feedback.innerText = "Excellent! You have a solid understanding of Chapter 5.";
    else feedback.innerText = "Good effort! Review the Multilevel Feedback Queue and Pthread sections.";
    
    window.scrollTo(0, document.body.scrollHeight);
}

window.onload = loadQuiz;