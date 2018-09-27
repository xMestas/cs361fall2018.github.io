webpackJsonp([0xc5355b887d26],{342:function(e,n){e.exports={data:{markdownRemark:{html:'<p>The IntelliJ IDEA development environment can use the Java JDK compiler and Ninja framework to build and execute each of the project sprints provided during CS361. The follow steps will provide you with a <em>Configuration</em> within IntelliJ IDEA that will first <strong>Clean</strong> (remove old files associated with previous builds), <strong>Compile</strong> (compile new copies of library files and project files), and <strong>Run</strong> (executes Ninja framework and your code). While the Ninja framework is running within IntelliJ IDEA, you can access your app by navigating to <a href="http://localhost:8080/">http://localhost:8080/</a> within the browser on your system.</p>\n<p><strong>Note:</strong> The Ninja framework is a small web server which is running locally, therefore the app is only available on the same system that is running the Ninja framework (e.g. running code on the OSU servers will not allow you to see your app in action).</p>\n<p>The following steps apply with the project open within IntelliJ IDEA (see <a href="/resources/idea-setup.md">Configuring IntelliJ IDEA and Importing Maven-based Projects</a>).</p>\n<ol>\n<li>Open the <em>Edit Configuration</em> menu from the drop-down button in the upper right-hand corner of window.</li>\n</ol>\n<img src="/images/editconfig.png" width=600px/>\n<ol start="2">\n<li>Within the <em>Run/Debug Configurations</em> window that appears, click the <code>+</code> button and select <em>Maven</em> from the drop-down menu.</li>\n</ol>\n<img src="/images/mavenconfig.png" width=500px/>\n<ol start="3">\n<li>Enter a name for the new Configuration that we are creating (e.g. <em>\'Execute\'</em> is given in the example). Also, within the Command line field, enter <code>ninja:run</code>.</li>\n</ol>\n<p><img src="/images/nameAndNinja.png"></p>\n<ol start="4">\n<li>At the bottom of the <em>Run/Debug Configurations window</em> is a section called <em>Before launch: Activate tool window.</em> Click the <code>+</code> button and select <em>Run Maven Goal</em>.</li>\n</ol>\n<img src="/images/mavengoals.png" width=600px/>\n<ol start="5">\n<li>Within the <em>Select Maven Goal</em> dialog that appears, enter <code>clean</code> into the <em>Command line</em> field, and click <em>OK.</em></li>\n</ol>\n<img src="/images/selectMavenGoal.png" width=600px/>\n<ol start="6">\n<li>\n<p>Complete steps 5 and 6 again, except with <code>compile</code> in the <em>Command line</em> field. This should result in two <em>Maven Goals</em> being listed, <code>clean</code> and then <code>compile</code>, in that order.</p>\n</li>\n<li>\n<p>Everything for your new <em>Configuration</em> should be set, select <code>OK</code> on the <em>Run/Debug Configurations</em> window. You should now see the name of your new <em>Configuration</em> within the drop-down in the upper right-hand corner of the IntelliJ IDEA window. You can run your new <em>Configuration</em> by selecting play arrow button.</p>\n</li>\n</ol>\n<img src="/images/runconfig.png" width=600px/>\n<h2>Acknowledgments</h2>\n<p>These intructions were authored by <a href="http://web.engr.oregonstate.edu/~nelsonni/">Nicholas Nelson</a> for the Fall 2017 offering of this class.</p>',frontmatter:{path:"/resources/idea-compiling",title:"Compiling Projects with IntelliJ IDEA"}}},pathContext:{}}}});
//# sourceMappingURL=path---resources-idea-compiling-b90c95ea84ac15655ce6.js.map