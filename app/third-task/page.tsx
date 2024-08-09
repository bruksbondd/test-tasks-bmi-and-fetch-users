
"use client"
type JobFunction = (callback: (result: any) => void) => void;

interface Job {
    fn: JobFunction;
    index: number;
}

interface ParallelOptions {
    parallelJobs: number;
}

class Parallel {
    private parallelJobs: number;
    private jobs: Job[];
    private results: any[];
    private runningJobs: number;
    private doneCallback: ((results: any[]) => void) | null;
    private jobIndex: number;

    constructor({ parallelJobs }: ParallelOptions) {
        this.parallelJobs = parallelJobs;
        this.jobs = [];
        this.results = [];
        this.runningJobs = 0;
        this.doneCallback = null;
        this.jobIndex = 0;
    }

    job(fn: JobFunction): this {
        this.jobs.push({ fn, index: this.jobIndex++ });
        return this;
    }

    done(callback: (results: any[]) => void): void {
        this.doneCallback = callback;
        this.runJobs();
    }

    private runJobs(): void {
        while (this.runningJobs < this.parallelJobs && this.jobs.length > 0) {
            this.runningJobs++;
            const { fn, index } = this.jobs.shift()!;
            fn((result: any) => {
                this.results[index] = result;
                this.runningJobs--;
                if (this.jobs.length > 0) {
                    this.runJobs();
                } else if (this.runningJobs === 0 && this.doneCallback) {
                    this.doneCallback(this.results);
                }
            });
        }
    }
}



export default function Page() {

    /************************************************
        * Please don`t change the code bellow this line *
        ************************************************/
    var runner = new Parallel({
        parallelJobs: 2
    });
    runner.job(step1)
        .job(step2)
        .job(step3)
        .job(step4)
        .done(onDone);
    function step1(done: Function) {
        console.log('step1');
        setTimeout(done, 1000, 'hello world');
    }
    function step2(done: Function) {
        console.log('step2');
        setTimeout(done, 1200, 'Job succeded');
    }
    function step3(done: Function) {
        console.log('step3');
        setTimeout(done, 1500, 'step3');
    }
    function step4(done: Function) {
        console.log('step4');
        setTimeout(done, 100, 'step4');
    }
    var isPassed = false;
    function onDone(results: Array<string>) {
        console.log('onDone', results);
        console.assert(Array.isArray(results), 'expect result to be array');
        console.assert(results[0] === 'hello world', 'Wrong answer 1');
        console.assert(results[1] === 'Job succeded', 'Wrong answer 2');

        console.assert(results[2] === 'step3', 'Wrong answer 3');
        console.assert(results[3] === 'step4', 'Wrong answer 4');
        console.log('Thanks, all works fine');
        isPassed = true;
    }
    setTimeout(function () {
        if (isPassed) return;
        console.error('Test is not done.');
    }, 10000);

    return (
      <main className="min-h-screen w-[478px] max-w-full container mx-auto p-5 mt-14 text-center">
       <h2 className="text-4xl font-bold text-blue-500 text-center mt-6 mb-6">Interview test</h2>
    <p className="text-[#8F8F8F] text-xl">You have to implement missing part of the application (`Parallel`) that making the
        code to be compiled and executed without exceptions and assertions in browser console.</p>
   
  
     <p className="mt-5 text-[#8F8F8F] text-sm">Open the developer console to check the result. (Press F12)</p>   
      </main>
    );
  }