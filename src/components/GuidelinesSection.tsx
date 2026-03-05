import { AlertCircle, Clock, FileWarning, HelpCircle, User, Image as ImageIcon, Send } from "lucide-react";

const GuidelinesSection = () => {
    return (
        <section id="guidelines" className="py-16 px-4 bg-muted/50 border-y border-border">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Important Guidelines
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
                        <h3 className="font-display text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                            <HelpCircle className="w-5 h-5" /> General Rules
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-muted-foreground">
                                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span>Participants must report <strong>30 minutes</strong> before their scheduled event.</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <User className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span><strong>College ID card</strong> is mandatory for all participants.</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <ImageIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span>All participants are required to bring a <strong>Passport Size Photo</strong> without fail.</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span>Plagiarism, malpractice, or arguments with officials will lead to immediate <strong>disqualification</strong>.</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <FileWarning className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span>The judges' decision is final and binding for all events. Time limits will be strictly enforced.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50 flex-1">
                            <h3 className="font-display text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" /> Event-Specific Requirements
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-muted-foreground">
                                    <User className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span><strong>Sports Events:</strong> Proper sports attire and sports shoes are strictly required.</span>
                                </li>
                                <li className="flex gap-3 text-muted-foreground">
                                    <Send className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span><strong>Paper Presentation:</strong> Submit your abstract and PPT to <a href="mailto:kitsakshargala2026@gmail.com" className="text-primary hover:underline font-medium">kitsakshargala2026@gmail.com</a> by <strong>March 9th, 2026</strong>.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 text-center flex flex-col items-center justify-center">
                            <h3 className="font-display text-lg font-semibold mb-2 text-primary">Need More Info?</h3>
                            <p className="text-sm text-muted-foreground mb-4">For any event-related queries, reach out to the individual event coordinators on the day of the fest or email us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuidelinesSection;
