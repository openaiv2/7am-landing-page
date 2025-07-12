/* eslint-disable no-irregular-whitespace */
import type { Meta, StoryObj } from "@storybook/react";
import Article from "./Article";

const meta = {
  title: "Article",
  component: Article,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
  args: { className: "" },
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "",
    content: `<div>
    <h2><span>Primary </span><span>Article</span><span> Heading </span></h2>
    </div>
    <div>
    <p><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</span><span></span><span></span></p>
    <div>
    <div>
    <p><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </span></p>
    <p><strong>Bold</strong></p>
    <p><em>Italic</em></p>
    <p><span><span data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5IjoiUVVaYThFdXRMZjJCcGxTdzh3dUthMyIsInBhc3RlSUQiOjExMTAzODQ5OTMsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)--&gt;"><a title="Link" href="https://7am.io" target="_blank" rel="noopener">Link</a></span></span></p>
    <div>
    <h3><span>Secondary </span><span>Article</span><span> Heading</span></h3>
    </div>
    <p><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</span></p>
    </div>
    </div>
    </div>
    <div>
    <div>
    <div>
    <p><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </span><span><span data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5IjoiUVVaYThFdXRMZjJCcGxTdzh3dUthMyIsInBhc3RlSUQiOjExMTAzODQ5OTMsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)--&gt;"><span data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5IjoiUVVaYThFdXRMZjJCcGxTdzh3dUthMyIsInBhc3RlSUQiOjExMTc0MjI2MDIsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)--&gt;"></span></span></span></p>
    <div>
    <ul style="list-style-type: circle;">
    <li><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span></li>
    <li><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span></li>
    <li><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span><span></span></li>
    </ul>
    <div>
    <ul>
    <li><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span></li>
    <li><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span></li>
    <li><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    <table style="border-collapse: collapse; width: 100%; height: 291.18px;" border="1"><colgroup><col style="width: 33.3333%;"><col style="width: 33.3333%;"><col style="width: 33.3333%;"></colgroup>
    <tbody>
    <tr style="height: 22.3984px;">
    <td style="height: 22.3984px;"><strong>Heading</strong></td>
    <td style="height: 22.3984px;"><strong>Heading</strong></td>
    <td style="height: 22.3984px;"><strong>Heading</strong></td>
    </tr>
    <tr style="height: 179.188px;">
    <td style="height: 179.188px;">TEst</td>
    <td style="height: 179.188px;">test</td>
    <td style="height: 179.188px;">
    <div>
    <div><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span></div>
    </div>
    </td>
    </tr>
    <tr style="height: 22.3984px;">
    <td style="height: 22.3984px;">test</td>
    <td style="height: 22.3984px;">test</td>
    <td style="height: 22.3984px;">test</td>
    </tr>
    <tr style="height: 22.3984px;">
    <td style="height: 22.3984px;"> </td>
    <td style="height: 22.3984px;"> </td>
    <td style="height: 22.3984px;"> </td>
    </tr>
    <tr style="height: 22.3984px;">
    <td style="height: 22.3984px;"> </td>
    <td style="height: 22.3984px;"> </td>
    <td style="height: 22.3984px;"> </td>
    </tr>
    <tr style="height: 22.3984px;">
    <td style="height: 22.3984px;"> </td>
    <td style="height: 22.3984px;"> </td>
    <td style="height: 22.3984px;"> </td>
    </tr>
    </tbody>
    </table>

    <ol class="ak-ol" start="1" data-prosemirror-content-type="node" data-prosemirror-node-name="orderedList" data-prosemirror-node-block="true">
<li data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true"><strong data-prosemirror-content-type="mark" data-prosemirror-mark-name="strong">Speed and Efficiency:</strong> QR codes can be scanned in seconds, drastically reducing entry times and minimizing long lines. This efficiency is vital in maintaining a positive mood and energy as attendees arrive.</p>
</li>
<li data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true"><strong data-prosemirror-content-type="mark" data-prosemirror-mark-name="strong">Security:</strong> QR code scanning helps in validating tickets accurately and swiftly, reducing the chances of fraud. Each code is unique and can be designed to be used once, ensuring that the same ticket cannot be used to gain entry twice.</p>
</li>
<li data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true"><strong data-prosemirror-content-type="mark" data-prosemirror-mark-name="strong">Data Collection:</strong> Using QR codes allows organizers to collect data in real-time as attendees enter. This data is crucial for understanding traffic flow and can help in making immediate adjustments to logistics if necessary.</p>
</li>
<li data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true"><strong data-prosemirror-content-type="mark" data-prosemirror-mark-name="strong">Contactless Entry:</strong> QR codes allow for a contactless check-in process that enhances safety for both staff and attendees.</p>
</li>
<li data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true"><strong data-prosemirror-content-type="mark" data-prosemirror-mark-name="strong">Integration with Mobile Technology:</strong> As most attendees carry smartphones, QR codes are easily accessible on their devices. This integration with mobile technology also facilitates last-minute ticket purchases and reduces the need for physical tickets.</p>
</li>
</ol>
    <p><span> </span></p>
    <p><img src="https://assets.7am.io/cms/App_Screen_c104b1395f.png" alt="" width="1271" height="1271"></p>
    <h3>Spotify</h3>
<p>// Displaying a single track.</p>
<p>&lt;Spotify link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" /&gt;</p>
<p> </p>
<p>// Displaying an album.</p>
<p>&lt;Spotify link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" /&gt;</p>
<p> </p>
<p>// Using wide attribute.</p>
<p>&lt;Spotify wide link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" /&gt;</p>
<h3>Insert Media Link</h3>
<p><iframe src="https://www.youtube.com/embed/7PIji8OubXU?si=E2x6V5HLfpZy7ji5" allowfullscreen="allowfullscreen"></iframe></p>
    `,
  },
};
