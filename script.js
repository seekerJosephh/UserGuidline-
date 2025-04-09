document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  const contentSections = document.querySelectorAll('.content');

  // Function to hide all content sections
  function hideAllContent() {
      contentSections.forEach(section => {
          section.classList.remove('active');
      });
  }

  // Function to show a specific content section
  function showContent(contentId) {
      const contentElement = document.getElementById(contentId);
      if (contentElement) {
          contentElement.classList.add('active');
      }
  }

  // Add event listeners to sidebar links
  sidebarLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          hideAllContent();
          const contentToShow = this.getAttribute('data-content');
          showContent(contentToShow);
      });
  });

  // Initially show the first content section
  if (contentSections.length > 0) {
      showContent(sidebarLinks[0].getAttribute('data-content'));
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.list-group-item-action');
  const contentSections = document.querySelectorAll('.content');

  // Function to hide all content sections
  function hideAllContent() {
      contentSections.forEach(section => {
          section.classList.add('d-none');
      });
  }

  // Function to show a specific content section
  function showContent(contentId) {
      const contentElement = document.getElementById(contentId);
      if (contentElement) {
          contentElement.classList.remove('d-none');
      }
  }

  // Function to deactivate all sidebar links
  function deactivateAllLinks() {
      sidebarLinks.forEach(link => {
          link.classList.remove('active');
      });
  }

  // Add event listeners to sidebar links
  sidebarLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          hideAllContent();
          deactivateAllLinks();
          this.classList.add('active');
          const contentToShow = this.getAttribute('data-content');
          showContent(contentToShow);
      });
  });

  // Initially show the first content section
  if (contentSections.length > 0) {
      showContent(sidebarLinks[0].getAttribute('data-content'));
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const guideSections = document.querySelectorAll('.guide-section');
  guideSections.forEach((section, index) => {
      section.style.animationDelay = `${index * 0.2}s`;
  });

  // Sample interaction: Alert on clicking a step (you can expand on this)
  const steps = document.querySelectorAll('.step');
  steps.forEach(step => {
      step.addEventListener('click', function() {
          console.log(`Clicked on step: ${this.querySelector('h3').textContent}`);
          alert(`You are now viewing the instructions for: ${this.querySelector('h3').textContent}`);
      });
  });
});


// Content for each section stored as JavaScript objects
const sections = {
    mozilla: `
    <section>
    <main class="container">
        <section id="introduction" class="guide-section">
            <h2>Welcome to the Google Mail (Gmail) in Thunderbird Guide</h2>
            <p>This guide will walk you through the steps to configure and effectively use Mozilla Thunderbird with your Google Mail (Gmail) account: <span class="email">demo@gmail.com</span>.</p>
            <p>Follow each step carefully to ensure a successful setup and seamless experience.</p>
        </section>
        <section id="download" class="guide-section step">
            <h3>Step 1: Download Thunderbird</h3>
            <p>Visit the official Mozilla Thunderbird download page.</p>
            <div class="image-placeholder">
                <img src="assets/mozilla/placeholder_download.png" alt="Screenshot of Thunderbird Download Page">
                <p class="caption">Image of the Mozilla Thunderbird download page.</p>
            </div>
            <p>Click on the appropriate download button for your operating system (Windows, macOS, or Linux).</p>
        </section>
        <section id="install" class="guide-section step">
            <h3>Step 2: Run the Installer</h3>
            <p>Once the download is complete, locate the installer file (e.g., Thunderbird Setup.exe on Windows, Thunderbird.dmg on macOS).</p>
            <div class="image-placeholder">
                <img src="assets/mozilla/install.png" alt="Screenshot of Thunderbird Installer">
                <p class="caption">Image showing the Thunderbird installer file.</p>
            </div>
            <p>Double-click the installer file to begin the installation process. Follow the on-screen instructions.</p>
        </section>
        <section id="account-setup" class="guide-section step">
            <h3>Step 3: Configure Your Gmail Account in Thunderbird</h3>
            <p>After the installation is finished, open Mozilla Thunderbird.</p>
            <div class="image-placeholder">
                <img src="assets/mozilla/welcom.png" alt="Screenshot of Thunderbird Welcome Screen">
                <p class="caption">Image of the initial Thunderbird welcome screen.</p>
            </div>
            <p>Go to File > New > Existing Mail Account.</p>
            <p>Enter your name, Gmail address (e.g., <span class="email">demo@gmail.com</span>), and password.</p>
            <div class="image-placeholder">
                <img src="assets/mozilla/CofigEmail.png" alt="Screenshot of Email Account Setup">
                <p class="caption">Image showing the email account details input form.</p>
            </div>
            <p>Click "Continue". Thunderbird will attempt to automatically configure your server settings.</p>
            <p>If prompted for server details, or if automatic configuration fails, use these settings:</p>
            <ul>
                <li>Incoming Server (IMAP): imap.gmail.com (Port 993, SSL/TLS)</li>
                <li>Outgoing Server (SMTP): smtp.gmail.com (Port 465, SSL/TLS)</li>
            </ul>
            <div class="image-placeholder">
                <img src="assets/mozilla/configuration.png" alt="Screenshot of Server Settings">
                <p class="caption">Image showing the manual server settings configuration.</p>
            </div>
            <p>If you use 2-Step Verification, generate an App Password from your Google Account settings and use it here instead of your regular Gmail password.</p>
            <p>Click "Done" to finish setup.</p>
        </section>
        <section id="thunderbird-gmail-usage" class="guide-section step">
            <h3>Step 4: Using Gmail in Thunderbird - Comprehensive Guide</h3>
            <p>After setup, Thunderbird will download your Gmail emails.</p>
            <p><strong>Composing Emails:</strong></p>
            <p>Click "Write" to compose a new email. Enter recipients, subject, and message. Use formatting options, attach files (paperclip icon), and add signatures (Tools > Account Settings > Signature).</p>
            <div class="image-placeholder">
                <img src="assets/mozilla/thunderbird_compose.png" alt="Screenshot of Thunderbird Compose Window">
                <p class="caption">Image of Thunderbird composing a new email.</p>
            </div>
            <p><strong>Managing Folders/Labels:</strong></p>
            <p>Gmail labels appear as folders in Thunderbird. Create new folders (labels) by right-clicking your account and selecting "New Folder". Drag and drop emails to organize. Note: changes sync with Gmail.</p>
            <div class="image-placeholder">
                <img src="assets/mozilla/thunderbird_folders.png" alt="Screenshot of Thunderbird Folder Management">
                <p class="caption">Image of Thunderbird folder/label management.</p>
            </div>
            <p><strong>Filtering and Sorting:</strong></p>
            <p>Create filters (Tools > Message Filters) to automatically sort incoming emails. Define criteria (sender, subject, etc.) and actions (move, label, delete).</p>
            <div class="image-placeholder">
                <img src="assets/mozilla/thunderbird_filters.png" alt="Screenshot of Thunderbird Message Filters">
                <p class="caption">Image of Thunderbird message filters.</p>
            </div>
            <p><strong>Searching Emails:</strong></p>
            <p>Use the search bar to find emails by keywords, sender, etc. Thunderbird searches your downloaded emails.</p>
            <div class="image-placeholder">
                <img src="assets/mozilla/thunderbird_searchs.png" alt="Screenshot of Thunderbird Search">
                <p class="caption">Image of Thunderbird search.</p>
            </div>
            <p><strong>Address Book:</strong></p>
            <p>Manage contacts in the Address Book (Address Book icon). Add, edit, and import contacts. Use them when composing emails.</p>
            <div class="image-placeholder">
                <img src="assets/mozilla/thunderbird_addressbook.png" alt="Screenshot of Thunderbird Address Book">
                <p class="caption">Image of Thunderbird address book.</p>
            </div>
            <p><strong>Gmail's "All Mail" and "Trash":</strong></p>
            <p>Gmail's "All Mail" folder shows all your emails. The "Trash" folder contains deleted emails (permanently deleted after 30 days).</p>
            <p><strong>Troubleshooting:</strong></p>
            <p>For connection issues, verify server settings and App Password (if applicable). Check Gmail's web interface for account issues.</p>
            <p><strong>Gmail Web Interface:</strong></p>
            <p>Manage Gmail settings (filters, labels, etc.) through the Gmail web interface. Changes will reflect in Thunderbird.</p>
        </section>
        <section id="finish" class="guide-section">
            <h2>Setup Complete!</h2>
            <p>Congratulations! You have successfully configured and learned to use Google Mail (Gmail) in Mozilla Thunderbird with the email address: <span class="email">demo@gmail.com</span>.</p>
            <div class="image-placeholder">
                <img src="assets/mozilla/done.png" alt="Screenshot of Server Settings">
                <p class="caption">Image showing the manual server settings configuration.</p>
            </div>
            <div class="success-message">
                <div class="checkmark-container">
                    <svg class="checkmark" viewBox="0 0 52 52">
                        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                </div>
                <p>Google Mail (Gmail) in Thunderbird is ready to use!</p>
            </div>
        </section>
    </main>
</section>
    `,
    outlook: `
        <section>
            <main class="container">
                <section id="introduction" class="guide-section">
                    <h2>Microsoft Outlook Setup Guide</h2>
                    <p>This guide will help you download, install, and set up Microsoft Outlook with your email address.</p>
                    <p>Follow these steps to get started with Outlook efficiently.</p>
                </section>
                <section id="download" class="guide-section step">
                    <h3>Download Instructions</h3>
                    <p><span class="step-number">1</span> Visit the official Microsoft website: <a href="https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook" target="_blank">Outlook Download Page</a></p>
                    <div class="image-placeholder">
                        <img src="assets/outlook/image.png" alt="Screenshot of Microsoft Outlook Download Page">
                        <p class="caption">Screenshot of the Microsoft Outlook download page.</p>
                    </div>
                    <p><span class="step-number">-</span> Or go to App store for IOS and Play Store for Android </p>
                    <div class="image-placeholder">
                        <img src="assets/outlook/download.png" alt="Screenshot of Microsoft Outlook Download Page">
                        <p class="caption">Image of IOS App Store</p>
                    </div>
                    <p><span class="step-number">2</span> Sign in with your Microsoft account or create one if you don’t have it.</p>
                    <p><span class="step-number">3</span> Choose your subscription plan or opt for the free version if available.</p>
                    <p><span class="step-number">4</span> Click "Download" and save the installer to your computer or download in mobile phone.</p>
                </section>
                <section id="install" class="guide-section step">
                    <h3>Installation Steps</h3>
                    <p><span class="step-number">1</span> Locate the downloaded installer file (usually in your Downloads folder) or start app If you use mobile add</p>
                    <div class="image-placeholder">
                        <img src="assets/outlook/start.png" alt="Screenshot of Microsoft Outlook Installer">
                        <p class="caption">Screenshot showing the installer file location.</p>
                    </div>
                    <p><span class="step-number">2</span> Double-click the installer to start the setup process.</p>
                    <p><span class="step-number">3</span> Follow the on-screen instructions to complete the installation.</p>
                    <p><span class="step-number">4</span> Launch Outlook from your Start menu or desktop shortcut.</p>
                    <p><span class="step-number">5</span> After Launched Outlook from your Start menu or desktop you can click add Account if you already have exiting Account with OutLook.</p>
                    <p><span class="step-number">6</span> If you are new here with out look just click on Create New Account</p>
                </section>
                <section id="account-setup" class="guide-section step">
                    <h3>Email Setup</h3>
                    <p><span class="step-number">1</span> After Open Outlook and select "Create New Account". Create your new Account Email and Click "Next".</p>
                    <div class="image-placeholder">
                        <img src="assets/outlook/create.png" alt="Screenshot of Microsoft Outlook Welcome Screen">
                        <p class="caption">Screenshot of Outlook’s account setup option.</p>
                    </div>
                    <p><span class="step-number">2</span> Create your new Account Password and Click "Next".</p>
                    <div class="image-placeholder">
                        <img src="assets/outlook/password.png" alt="Screenshot of Email Account Setup in Outlook">
                        <p class="caption">Enter your New Password</p>
                    </div>
                    <p><span class="step-number">3</span> Input your user First name and last name and click "Next".</p>
                    <p><span class="step-number">4</span> Input your Date of Birth and click "Next".</p>
                    <div class="image-placeholder">
                        <img src="assets/outlook/name.png" alt="Screenshot of Email Account Setup in Outlook">
                        <p class="caption">Enter your Name and Date of Birth</p>
                    </div>
                    <p><span class="step-number">5</span> It will successfully get into Microsoft Outlook</p>
                    <div class="image-placeholder">
                        <img src="assets/outlook/done.png" alt="Screenshot of Server Settings in Outlook">
                        <p class="caption">Screenshot of Outlook configuring settings.</p>
                    </div>
                </section>
                <section id="finish" class="guide-section">
                    <h2>Setup Complete!</h2>
                    <p>Congratulations! You’ve successfully set up Microsoft Outlook.</p>
                    <div class="success-message">
                        <div class="checkmark-container">
                            <svg class="checkmark" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                        <p>Microsoft Outlook is ready to use!</p>
                    </div>
                
                </section>
                <section id="new-mail" class="guide-section step">
                <h3>Creating a New Email</h3>
                <p><span class="step-number">1</span> Open Microsoft Outlook.</p>
                <p><span class="step-number">2</span> Click on the "New Email" button, usually located in the top-left corner of the Outlook window.</p>
                <div class="image-placeholder">
                    <img src="assets/outlook/NewMail.png" alt="Screenshot of New Email button in Outlook">
                    <p class="caption">Screenshot of the "New Email" button.</p>
                </div>
                <p><span class="step-number">3</span> A new email window will appear.</p>
                <p><span class="step-number">4</span> In the "To" field, enter the recipient's email address(es). You can also add recipients to the "Cc" (carbon copy) and "Bcc" (blind carbon copy) fields.</p>
                <div class="image-placeholder">
                    <img src="assets/outlook/CC.png" alt="Screenshot of To, Cc, and Bcc fields in Outlook">
                    <p class="caption">Screenshot of the recipient fields.</p>
                </div>
                <p><span class="step-number">5</span> In the "Subject" field, enter a brief description of the email's content.</p>
                <div class="image-placeholder">
                    <img src="assets/outlook/CC.png" alt="Screenshot of Subject field in Outlook">
                    <p class="caption">Screenshot of the subject field.</p>
                </div>
                <p><span class="step-number">6</span> In the message body, type your email content. You can format the text, add images, and insert links as needed.</p>
                <div class="image-placeholder">
                    <img src="assets/outlook/CC.png" alt="Screenshot of Message body in Outlook">
                    <p class="caption">Screenshot of the message body.</p>
                </div>
                <p><span class="step-number">7</span> If you need to attach files, click the "Attach File" button (usually a paperclip icon) and select the files from your computer.</p>
                <div class="image-placeholder">
                    <img src="assets/outlook/CC.png" alt="Screenshot of Attach File button in Outlook">
                    <p class="caption">Screenshot of the attach file button.</p>
                </div>
                <p><span class="step-number">8</span> Review your email for accuracy and completeness.</p>
                <p><span class="step-number">9</span> Click the "Send" button to send your email.</p>
                <div class="image-placeholder">
                    <img src="assets/outlook/CC.png" alt="Screenshot of Send button in Outlook">
                    <p class="caption">Screenshot of the send button.</p>
                </div>
            </section>
            <section id="finish" class="guide-section">
                <h2>Setup Complete!</h2>
                <p>Congratulations! You’ve successfully set up Microsoft Outlook and learned how to create a new email.</p>
                <div class="success-message">
                    <div class="checkmark-container">
                        <svg class="checkmark" viewBox="0 0 52 52">
                            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                    </div>
                    <p>Microsoft Outlook is ready to use!</p>
                </div>
               
            </section>
            </main>
        </section>
    `,
    gmail: `
    <section>
    <main class="container">
        <section id="introduction" class="guide-section">
            <h2>Welcome to the Google Mail (Gmail) Guide</h2>
            <p>This guide will walk you through setting up and using Google Mail (Gmail) with your email address: <span class="email">demo@gmail.com</span>.</p>
            <p>Follow each step carefully to ensure a smooth experience.</p>
        </section>

        <section id="account-creation" class="guide-section step">
            <h3>Step 1: Create a Google Account (if you don't have one)</h3>
            <p>If you don't already have a Google Account, you'll need to create one to use Gmail.</p>
            <p>Go to the <a href="https://accounts.google.com/signup" target="_blank">Google Account creation page</a>.</p>
            <div class="image-placeholder">
                <img src="assets/gmail/gmail_signup.png" alt="Screenshot of Google Account Creation Page">
                <p class="caption">Screenshot of the Google Account creation page.</p>
            </div>
            <p>Fill in the required information (First name, Last name, desired username, password, etc.) and click "Next".</p>
            <p>Follow the on-screen instructions to complete the account creation process, which may include verifying your phone number.</p>
        </section>

        <section id="access-gmail" class="guide-section step">
            <h3>Step 2: Access Gmail</h3>
            <p>Once you have a Google Account, you can access Gmail.</p>
            <p>Open your web browser (e.g., Chrome, Firefox, Safari, Edge) and go to <a href="https://mail.google.com/" target="_blank">mail.google.com</a>.</p>
            <div class="image-placeholder">
                <img src="assets/gmail/gmail_login.png" alt="Screenshot of Gmail Login Page">
                <p class="caption">Screenshot of the Gmail login page.</p>
            </div>
            <p>Enter your Google Account email address (e.g., demo@gmail.com) or phone number and click "Next".</p>
            <p>Enter your Google Account password and click "Next".</p>
            <p>If you have enabled 2-Step Verification, you will need to complete that verification step.</p>
        </section>

        <section id="compose-email" class="guide-section step">
            <h3>Step 3: Compose a New Email</h3>
            <p>To send a new email, click the "Compose" button. It's usually a large button with a plus sign (+) and the word "Compose" in the top left corner.</p>
            <div class="image-placeholder">
                <img src="assets/gmail/gmail_compose.png" alt="Screenshot of Gmail Compose Button">
                <p class="caption">Screenshot of the Gmail Compose button.</p>
            </div>
            <p>A new message window will appear.</p>
            <p>In the "To" field, enter the recipient's email address.</p>
            <p>You can add more recipients using the "Cc" (Carbon copy) and "Bcc" (Blind carbon copy) fields.</p>
            <p>Enter a brief description of the email's content in the "Subject" field.</p>
            <p>Type your message in the main body of the email. You can format the text, add links, and insert images.</p>
            <p>To attach files, click the paperclip icon at the bottom of the compose window and select the files from your computer.</p>
            <p>When you're ready to send, click the "Send" button.</p>
            <div class="image-placeholder">
                <img src="assets/gmail/gmail_send.png" alt="Screenshot of Gmail Send Button">
                <p class="caption">Screenshot of the Gmail Send button.</p>
            </div>
        </section>

        <section id="read-reply-forward" class="guide-section step">
            <h3>Step 4: Read, Reply, and Forward Emails</h3>
            <p>When you receive a new email, it will appear in your "Inbox".</p>
            <p>Click on the email's subject to open and read it.</p>
            <div class="image-placeholder">
                <img src="assets/gmail/gmail_inbox.png" alt="Screenshot of Gmail Inbox">
                <p class="caption">Screenshot of the Gmail Inbox.</p>
            </div>
            <p>To reply to the sender, click the "Reply" button below the email message.</p>
            <p>To reply to the sender and all other recipients, click "Reply all".</p>
            <p>To forward the email to someone else, click the "Forward" button.</p>
            <div class="image-placeholder">
                <img src="assets/gmail/gmail_reply_forward.png" alt="Screenshot of Gmail Reply and Forward Buttons">
                <p class="caption">Screenshot of the Gmail Reply and Forward buttons.</p>
            </div>
        </section>

        <section id="organize-emails" class="guide-section step">
            <h3>Step 5: Organize Your Emails</h3>
            <p>Gmail provides several ways to organize your emails:</p>
            <ul>
                <li>
                    <b>Labels:</b> You can create labels to categorize your emails. Click the "Manage labels" (gear icon) to create and manage labels.
                </li>
                <li>
                    <b>Folders (Categories):</b> Gmail automatically sorts emails into categories like "Primary," "Social," "Promotions," etc. You can customize these.
                </li>
                <li>
                    <b>Search:</b> Use the search bar at the top to find emails by sender, recipient, subject, keywords, etc.
                </li>
                <li>
                    <b>Filters:</b> Create filters to automatically label, archive, delete, or forward incoming emails based on specific criteria.
                </li>
                <li>
                    <b>Archive:</b> To remove emails from your inbox without deleting them, click the "Archive" button. You can find archived emails in "All Mail".
                </li>
                <li>
                    <b>Delete:</b> To permanently remove emails, click the "Delete" button. Deleted emails go to the "Trash" and are permanently deleted after 30 days.
                </li>
            </ul>
            <div class="image-placeholder">
                <img src="assets/gmail/gmail_organize.png" alt="Screenshot of Gmail Organizing Options">
                <p class="caption">Screenshot of Gmail organizing options.</p>
            </div>
        </section>

        <section id="settings" class="guide-section step">
            <h3>Step 6: Gmail Settings</h3>
            <p>You can customize Gmail's appearance and behavior in the settings.</p>
            <p>Click the gear icon in the top right corner and select "See all settings".</p>
            <div class="image-placeholder">
                <img src="assets/gmail/gmail_settings.png" alt="Screenshot of Gmail Settings Icon">
                <p class="caption">Screenshot of the Gmail settings icon.</p>
            </div>
            <p>Here you can change your theme, notification settings, filters, forwarding options, and more.</p>
        </section>

        <section id="finish" class="guide-section">
            <h2>Gmail Setup and Usage Complete!</h2>
            <p>Congratulations! You have successfully set up and learned the basics of using Google Mail (Gmail) with the email address: <span class="email">demo@gmail.com</span>.</p>
            <div class="success-message">
                <div class="checkmark-container">
                    <svg class="checkmark" viewBox="0 0 52 52">
                        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                </div>
                <p>Google Mail (Gmail) is ready to use!</p>
            </div>
        </section>
    </main>
</section>
    `
};

// Function to load content into the content area
function loadContent(section) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = sections[section];

    // Add event listener for Outlook tips toggle if present
    if (section === 'outlook') {
        const toggleTipsBtn = document.getElementById('toggleTips');
        const tipsSection = document.getElementById('tips');
        if (toggleTipsBtn && tipsSection) {
            toggleTipsBtn.addEventListener('click', () => {
                tipsSection.classList.toggle('hidden');
                toggleTipsBtn.textContent = tipsSection.classList.contains('hidden') ? 'Show Additional Tips' : 'Hide Additional Tips';
            });
        }
    }
}

// Event listeners for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        loadContent(section);
        // Update active class
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        // Close offcanvas
        const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('emailGuideOffcanvas'));
        if (offcanvas) offcanvas.hide();
    });
});

// Load Mozilla Thunderbird by default
document.addEventListener('DOMContentLoaded', () => {
    loadContent('mozilla');
});