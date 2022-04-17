import React from "react";

const Blogs = () => {
  return (
    <div className="md:ml-20 mr-20 mt-10 ml-10">
        <div>
        <h1 className="font-bold text-2xl mb-3">01. Differnce Between Authorization & Authentication</h1>
      <table className="table-auto border-collapse border border-slate-400">
        <thead>
          <tr className="border border-slate-400">
            <th className="border border-slate-400">Sl. No</th>
            <th className="border border-slate-400">Authorization </th>
            <th className="border border-slate-400">Authentication</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-slate-400">
            <td className="border border-slate-400 p-2">01</td>
            <td className="border border-slate-400 p-2">Authorization determines what resources a user can access.</td>
            <td className="border border-slate-400 p-2">Authentication verifies who the user is.</td>
          </tr>
          <tr className="border border-slate-400">
            <td className="border border-slate-400 p-2">02</td>
            <td className="border border-slate-400 p-2">Authorization works through settings that are implemented and maintained by the organization.</td>
            <td className="border border-slate-400 p-2">Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
          </tr>
          <tr>
            <td className="border border-slate-400 p-2">03</td>
            <td className="border border-slate-400 p-2">Authorization always takes place after authentication.</td>
            <td className="border border-slate-400 p-2">Authentication is the first step of a good identity and access management process.</td>
          </tr>
        </tbody>
      </table>
        </div>

        <div className="mt-10">
        <h1 className="font-bold text-2xl mb-3">02. Why are you using firebase? What other options do you have to implement authentication?</h1>
        <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>

        <p className="mt-3
        mb-3">There have many option to implement authenticate are given below:</p>
        <ul>
            <li>01. Email and password based authentication</li>
            <li>02. Federated identity provider integration</li>
            <li>03. Phone number authentication</li>
            <li>04. Custom auth system integration</li>
            <li>05. Anonymous auth</li>
        </ul>
        </div>

        <div className="mt-10 mb-10">
        <h1 className="font-bold text-2xl mb-3">02. What other services does firebase provide other than authentication?</h1>
        <p className="mt-4 mb-4">There are many services which Firebase provides, Most useful of them are:</p>

        <ul className="marker:text-sky-400 list-disc ml-5">
            <li>Cloud Firestore</li>
            <li>Cloud Functions</li>
            <li>Authentication</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Cloud Messaging</li>
        </ul>
        </div>
    </div>
  );
};

export default Blogs;
