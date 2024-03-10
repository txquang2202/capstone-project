type ApproveApplyJobParams = {
  name: string;
  title: string;
  company: string;
};

export const approveApplyJob = ({
  name,
  title,
  company,
}: ApproveApplyJobParams) => {
  return `
  <table align="center" class="m_1107646641560681985imailer-container">
    <tbody>
        <tr>
            <td>
                <table class="m_1107646641560681985imailer-header">
                    <tbody>
                        <tr>
                            <td class="m_1107646641560681985imailer-header-logo">
                                <img
                                    height="55"
                                    src="https://ci3.googleusercontent.com/meips/ADKq_NZn7YtgE9poZU7EfStELW1WVexgFrotq7Z73f_1BX4ukOm1xJm29byTfoG0chRJKYVnIXlwngOFvZQtTxb6UvA7KIx4edAfz-zQ5P0bcePXrPW3l5RkuT64e94vkhJHfjXz5xo7KnKxqzOTpvUdLRzymRzoxa_E1knqFkbC00A=s0-d-e1-ft#https://itviec.com/assets/mails/logo-5f3371a704b475a80f27523e1bcfc4853c03bd7e32b8893971074a64d48bdd6c.png"
                                    class="CToWUd"
                                    data-bit="iit"
                                />
                            </td>
                            <td class="m_1107646641560681985imailer-header-robby m_1107646641560681985text-end">
                                <img
                                    height="80"
                                    src="https://ci3.googleusercontent.com/meips/ADKq_NZuL5FfPzyV-Xbi7bGIXVXSvMc2Ssv2eJaJWpsLGq7aGzFyxe4SFe5zrtbJ4gGzF19USWSwQ2J3HerpTHefnPAocBazPnqwF4_pmb_-KWyb8OTn77zYTBRu2mVrzovqdtPVsvREniqqMN7xS11j9ajoaZJfl8kkmlXrlyXWLfXxvg09nIIMT1g3QpsuTQ=s0-d-e1-ft#https://itviec.com/assets/mails/robby-subscription-a000c03aa20a8f2397802b9b2addb7974f6352bf61491e0a0fc9c18f08a56b9d.png"
                                    class="CToWUd"
                                    data-bit="iit"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="m_1107646641560681985imailer-content">
                    <tbody>
                        <tr>
                            <td class="m_1107646641560681985header-content m_1107646641560681985ifs-14">
                                <span>Hi ${name} ,</span>
                                <br />
                                Congratulations!
                            </td>
                        </tr>
                        <tr>
                            <td class="m_1107646641560681985paragraph m_1107646641560681985ifs-14">
                                Your application for
                                <strong>${title}</strong>
                                is approved. We have sent it to
                                <strong>${company}.</strong>
                            </td>
                        </tr>
                        <tr>
                            <td class="m_1107646641560681985normal-text m_1107646641560681985ifs-14">
                                Approved candidates like you get special benefits only on ITviec:
                            </td>
                        </tr>
                        <tr>
                            <td class="m_1107646641560681985list-item m_1107646641560681985normal-text">
                                <p class="m_1107646641560681985item">
                                    1.
                                    <strong>Get noticed faster</strong>
                                    <span>- your CV from ITviec gets more recruiter attention because we screen for quality.</span>
                                </p>
                                <p class="m_1107646641560681985item">
                                    2.
                                    <strong>Save time</strong>
                                    <span>- apply once on ITviec for the best chance of getting that great job.</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td class="m_1107646641560681985paragraph m_1107646641560681985ifs-14">
                                Unlock opportunities now with ITviec!
                            </td>
                        </tr>
                        <tr>
                            <td class="m_1107646641560681985footer-signature m_1107646641560681985ifs-14 m_1107646641560681985text-it-dark">
                                <span>Best regards,</span>
                                <br />
                                <span>The ITviec Team</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="m_1107646641560681985normal-text m_1107646641560681985ifs-14">
                                Here are some similar jobs for you:
                            </td>
                        </tr>
                        <tr>
                            <td class="m_1107646641560681985job-section">
                                <a
                                    class="m_1107646641560681985text-decoration-none"
                                    href="http://im2.itviec.com/ls/click?upn=lvulMGjiThk0vRHw7MZ-2FERhqkTeITPvcVTq2jln2mr3y8KZ54EB6wt6vYFM2E5zWypL2nEKl7u8h6spP4phgbRfgg0bBAMmUGkEmeOf3WTUFeRr1Xid-2FUKdQUAVu71VkdL1lSmMtdyQjsstBK-2Brx6gBqnOhH5kram716tNg6rhGKtlWH8MABqtjhtjFz6s-2BL9WxcPUFy4MPE3dNQprl-2FNGPwcr02-2FqtqQnnTljW67nqQ6dwERQHOlqM2M2ruM9b1x5yX_gOuinHFESSTiRMY80JO9VGx5bSYoy-2BEhKpatspP87Y2uLqBbR8OGUEpuiQqQItmTsPivRwhscjK-2B9KCfJVXcMrmyovXIMZrIy7z3vJhv9ZEvfqx44MFietIxhJgGiJxVuSNLQkmsn8DgHz4i5PS-2BTCBtipjRt4-2BvcYQwJ3B54hMtrQEzyCxCMsbunUpiyj9xf6hOlRpzLWphwm7VscntyOesZEaKD-2FPWW1grlJ83EncxM8ohWHAnD-2F-2Bpxw6HKxqu36PIoKU6GTaP-2Fejvy5Zao8nh80dZaK1SD6z8VHgBJ9c-3D"
                                    target="_blank"
                                    data-saferedirecturl="https://www.google.com/url?q=http://im2.itviec.com/ls/click?upn%3DlvulMGjiThk0vRHw7MZ-2FERhqkTeITPvcVTq2jln2mr3y8KZ54EB6wt6vYFM2E5zWypL2nEKl7u8h6spP4phgbRfgg0bBAMmUGkEmeOf3WTUFeRr1Xid-2FUKdQUAVu71VkdL1lSmMtdyQjsstBK-2Brx6gBqnOhH5kram716tNg6rhGKtlWH8MABqtjhtjFz6s-2BL9WxcPUFy4MPE3dNQprl-2FNGPwcr02-2FqtqQnnTljW67nqQ6dwERQHOlqM2M2ruM9b1x5yX_gOuinHFESSTiRMY80JO9VGx5bSYoy-2BEhKpatspP87Y2uLqBbR8OGUEpuiQqQItmTsPivRwhscjK-2B9KCfJVXcMrmyovXIMZrIy7z3vJhv9ZEvfqx44MFietIxhJgGiJxVuSNLQkmsn8DgHz4i5PS-2BTCBtipjRt4-2BvcYQwJ3B54hMtrQEzyCxCMsbunUpiyj9xf6hOlRpzLWphwm7VscntyOesZEaKD-2FPWW1grlJ83EncxM8ohWHAnD-2F-2Bpxw6HKxqu36PIoKU6GTaP-2Fejvy5Zao8nh80dZaK1SD6z8VHgBJ9c-3D&amp;source=gmail&amp;ust=1710154293616000&amp;usg=AOvVaw1W6a2jl81iWHzfrzREJDxr"
                                >
                                    <span class="m_1107646641560681985job-title m_1107646641560681985ifs-16 m_1107646641560681985ifw-500">Senior Frontend Engineer (ReactJS)</span>
                                </a>
                                <p class="m_1107646641560681985job-company-name m_1107646641560681985ifs-14 m_1107646641560681985ifw-500 m_1107646641560681985text-it-black">NAVER VIETNAM</p>
                                <p class="m_1107646641560681985job-skill-tags m_1107646641560681985ifs-14">
                                    <span class="m_1107646641560681985ifs-12 m_1107646641560681985text-dark-grey">ReactJS</span>
                                    <span class="m_1107646641560681985skill-tags-dot m_1107646641560681985text-light-grey">•</span>
                                    <span class="m_1107646641560681985ifs-12 m_1107646641560681985text-dark-grey">JavaScript</span>
                                    <span class="m_1107646641560681985skill-tags-dot m_1107646641560681985text-light-grey">•</span>
                                    <span class="m_1107646641560681985ifs-12 m_1107646641560681985text-dark-grey">NodeJS</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td class="m_1107646641560681985job-section">
                                <a
                                    class="m_1107646641560681985text-decoration-none"
                                    href="http://im2.itviec.com/ls/click?upn=lvulMGjiThk0vRHw7MZ-2FERhqkTeITPvcVTq2jln2mr0jb2Kxn3Xnbxy-2FtJOBJcLyxJ-2FQlPDF6Dqcp0LIEKaqtpQxbD-2B36qqMbFseQH-2BXp27MJT-2B7Q1puVqRlyGXF4oiTpT2iMiqAI-2Bvz6VLVVPg-2B-2F25n8-2Fl0SO4YxHJkMi3nn90kOTEq04B-2F5nsJCyniQMf38eUnRYezmsbeCbWVGHcf5xBpDfN-2FFKlzrtHGaC7LLdKi1kptPtxfcBQjixO0d3lD0sPVw-2BzM-2BOgz6Z6T4TROAQ-3D-3DZixA_gOuinHFESSTiRMY80JO9VGx5bSYoy-2BEhKpatspP87Y2uLqBbR8OGUEpuiQqQItmTsPivRwhscjK-2B9KCfJVXcMrmyovXIMZrIy7z3vJhv9ZEvfqx44MFietIxhJgGiJxV93NWqobATdDZc7kw71rRQtJYfHl9nAXdIsEevMzlSNmg2IRhyVS-2B5FSCRCB9QqVaDlkwS-2B0uzUu9-2BVQIOWe1vVWdhd7-2FgcNvS7-2FEJdmJ14p-2FfSG8pp1kyfjhlrrBq-2FQvlDQ568NcuNhmXX6oPCNinTFQWcrpTvcLxmYPX2fuewo-3D"
                                    target="_blank"
                                    data-saferedirecturl="https://www.google.com/url?q=http://im2.itviec.com/ls/click?upn%3DlvulMGjiThk0vRHw7MZ-2FERhqkTeITPvcVTq2jln2mr0jb2Kxn3Xnbxy-2FtJOBJcLyxJ-2FQlPDF6Dqcp0LIEKaqtpQxbD-2B36qqMbFseQH-2BXp27MJT-2B7Q1puVqRlyGXF4oiTpT2iMiqAI-2Bvz6VLVVPg-2B-2F25n8-2Fl0SO4YxHJkMi3nn90kOTEq04B-2F5nsJCyniQMf38eUnRYezmsbeCbWVGHcf5xBpDfN-2FFKlzrtHGaC7LLdKi1kptPtxfcBQjixO0d3lD0sPVw-2BzM-2BOgz6Z6T4TROAQ-3D-3DZixA_gOuinHFESSTiRMY80JO9VGx5bSYoy-2BEhKpatspP87Y2uLqBbR8OGUEpuiQqQItmTsPivRwhscjK-2B9KCfJVXcMrmyovXIMZrIy7z3vJhv9ZEvfqx44MFietIxhJgGiJxV93NWqobATdDZc7kw71rRQtJYfHl9nAXdIsEevMzlSNmg2IRhyVS-2B5FSCRCB9QqVaDlkwS-2B0uzUu9-2BVQIOWe1vVWdhd7-2FgcNvS7-2FEJdmJ14p-2FfSG8pp1kyfjhlrrBq-2FQvlDQ568NcuNhmXX6oPCNinTFQWcrpTvcLxmYPX2fuewo-3D&amp;source=gmail&amp;ust=1710154293616000&amp;usg=AOvVaw3od1z0VP2t6Sa0IFyorKcu"
                                >
                                    <span class="m_1107646641560681985job-title m_1107646641560681985ifs-16 m_1107646641560681985ifw-500">Remote Full Stack Engineer (NodeJS/PHP/ReactJS)</span>
                                </a>
                                <p class="m_1107646641560681985job-company-name m_1107646641560681985ifs-14 m_1107646641560681985ifw-500 m_1107646641560681985text-it-black">Jitera</p>
                                <p class="m_1107646641560681985job-salary m_1107646641560681985ifs-14 m_1107646641560681985text-it-success">
                                    1,000 - 2,000 USD
                                </p>
                                <p class="m_1107646641560681985job-skill-tags m_1107646641560681985ifs-14">
                                    <span class="m_1107646641560681985ifs-12 m_1107646641560681985text-dark-grey">NodeJS</span>
                                    <span class="m_1107646641560681985skill-tags-dot m_1107646641560681985text-light-grey">•</span>
                                    <span class="m_1107646641560681985ifs-12 m_1107646641560681985text-dark-grey">ReactJS</span>
                                    <span class="m_1107646641560681985skill-tags-dot m_1107646641560681985text-light-grey">•</span>
                                    <span class="m_1107646641560681985ifs-12 m_1107646641560681985text-dark-grey">TypeScript</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td class="m_1107646641560681985job-section">
                                <a
                                    class="m_1107646641560681985text-decoration-none"
                                    href="http://im2.itviec.com/ls/click?upn=lvulMGjiThk0vRHw7MZ-2FERhqkTeITPvcVTq2jln2mr3y8KZ54EB6wt6vYFM2E5zWsbmr4-2BJf-2F-2Bd473-2BPONTLzyhxGfhJ6QHau8NASgNkseZUM2Ao14NE4Oyfmei6PG4VtUj3bpGt8TeqAluoS0rnnejLEAJtxPhmvsaQxIagedLxSaQqyHZEg2XWFDUckWSCpxUREWa9xYvaniHB9SJ6FzuUBnHvTdTqJmFUOZjwpTRyWGMtxnroXMhyz3Ujw7Na4yALdwYj0K0it4nfbMj-2F9g-3D-3DtC4A_gOuinHFESSTiRMY80JO9VGx5bSYoy-2BEhKpatspP87Y2uLqBbR8OGUEpuiQqQItmTsPivRwhscjK-2B9KCfJVXcMrmyovXIMZrIy7z3vJhv9ZEvfqx44MFietIxhJgGiJxV7GHvp4D2RwJ5K0HIed-2Bve9t4JgV2Vxa5h8wJp7E-2B6TMqcfErcbm57pU9xg6CsCEmKI-2F2SjIeizgSYk2TibFusaRbaf-2FSWeLm1J7197p4jbIXsxlQhtk-2FJMj4tPF9cpiPwDYqTTquixOUy39SfmsspVMwaO3suvPqMeh67A1kjPM-3D"
                                    target="_blank"
                                    data-saferedirecturl="https://www.google.com/url?q=http://im2.itviec.com/ls/click?upn%3DlvulMGjiThk0vRHw7MZ-2FERhqkTeITPvcVTq2jln2mr3y8KZ54EB6wt6vYFM2E5zWsbmr4-2BJf-2F-2Bd473-2BPONTLzyhxGfhJ6QHau8NASgNkseZUM2Ao14NE4Oyfmei6PG4VtUj3bpGt8TeqAluoS0rnnejLEAJtxPhmvsaQxIagedLxSaQqyHZEg2XWFDUckWSCpxUREWa9xYvaniHB9SJ6FzuUBnHvTdTqJmFUOZjwpTRyWGMtxnroXMhyz3Ujw7Na4yALdwYj0K0it4nfbMj-2F9g-3D-3DtC4A_gOuinHFESSTiRMY80JO9VGx5bSYoy-2BEhKpatspP87Y2uLqBbR8OGUEpuiQqQItmTsPivRwhscjK-2B9KCfJVXcMrmyovXIMZrIy7z3vJhv9ZEvfqx44MFietIxhJgGiJxV7GHvp4D2RwJ5K0HIed-2Bve9t4JgV2Vxa5h8wJp7E-2B6TMqcfErcbm57pU9xg6CsCEmKI-2F2SjIeizgSYk2TibFusaRbaf-2FSWeLm1J7197p4jbIXsxlQhtk-2FJMj4tPF9cpiPwDYqTTquixOUy39SfmsspVMwaO3suvPqMeh67A1kjPM-3D&amp;source=gmail&amp;ust=1710154293616000&amp;usg=AOvVaw3iKlKBonSKfMgUVNXZeZTX"
                                >
                                    <span class="m_1107646641560681985job-title m_1107646641560681985ifs-16 m_1107646641560681985ifw-500">Senior Frontend Developer (ReactJS/VueJS)</span>
                                </a>
                                <p class="m_1107646641560681985job-company-name m_1107646641560681985ifs-14 m_1107646641560681985ifw-500 m_1107646641560681985text-it-black">ANDPAD VietNam Co., Ltd</p>
                                <p class="m_1107646641560681985job-skill-tags m_1107646641560681985ifs-14">
                                    <span class="m_1107646641560681985ifs-12 m_1107646641560681985text-dark-grey">ReactJS</span>
                                    <span class="m_1107646641560681985skill-tags-dot m_1107646641560681985text-light-grey">•</span>
                                    <span class="m_1107646641560681985ifs-12 m_1107646641560681985text-dark-grey">VueJS</span>
                                    <span class="m_1107646641560681985skill-tags-dot m_1107646641560681985text-light-grey">•</span>
                                    <span class="m_1107646641560681985ifs-12 m_1107646641560681985text-dark-grey">TypeScript</span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="m_1107646641560681985imailer-footer">
                    <tbody>
                        <tr>
                            <td width="100%">
                                <span class="m_1107646641560681985ifs-14">
                                    <a
                                        class="m_1107646641560681985text-decoration-underline m_1107646641560681985text-it-dark"
                                        href="http://im2.itviec.com/ls/click?upn=lvulMGjiThk0vRHw7MZ-2FESQe0T9JTHssvNOlui0nPnK-2Bi1ulxLywVb7myqD9djReTHlLV20Y-2BGwdc4knKpWrPA-3D-3DJuxi_gOuinHFESSTiRMY80JO9VGx5bSYoy-2BEhKpatspP87Y2uLqBbR8OGUEpuiQqQItmTsPivRwhscjK-2B9KCfJVXcMrmyovXIMZrIy7z3vJhv9ZEvfqx44MFietIxhJgGiJxVdL8JO-2Fzefc7kUT8AtoMMIXdW7DDlvZdiT6DnTqgxoGPXCV-2Fz7N6pGga1-2But0v1LyynO7O3ioje3ueo3K-2FYEqeXzovbcCBPSo4omPPYtL5ykezu-2BCLyxOC5AnNal1By67YUVNNpXvVlnh7uAJZ-2FgfPyC6tV2U9eBK6PTSYucRySU-3D"
                                        target="_blank"
                                        data-saferedirecturl="https://www.google.com/url?q=http://im2.itviec.com/ls/click?upn%3DlvulMGjiThk0vRHw7MZ-2FESQe0T9JTHssvNOlui0nPnK-2Bi1ulxLywVb7myqD9djReTHlLV20Y-2BGwdc4knKpWrPA-3D-3DJuxi_gOuinHFESSTiRMY80JO9VGx5bSYoy-2BEhKpatspP87Y2uLqBbR8OGUEpuiQqQItmTsPivRwhscjK-2B9KCfJVXcMrmyovXIMZrIy7z3vJhv9ZEvfqx44MFietIxhJgGiJxVdL8JO-2Fzefc7kUT8AtoMMIXdW7DDlvZdiT6DnTqgxoGPXCV-2Fz7N6pGga1-2But0v1LyynO7O3ioje3ueo3K-2FYEqeXzovbcCBPSo4omPPYtL5ykezu-2BCLyxOC5AnNal1By67YUVNNpXvVlnh7uAJZ-2FgfPyC6tV2U9eBK6PTSYucRySU-3D&amp;source=gmail&amp;ust=1710154293617000&amp;usg=AOvVaw2NiZX1SWskb_QCl1aYb0TV"
                                    >
                                        Explore Best IT Companies in Vietnam
                                    </a>
                                </span>
                            </td>
                            <td class="m_1107646641560681985text-end">
                                <img
                                    height="20"
                                    src="https://ci3.googleusercontent.com/meips/ADKq_NYeB1YelNUjIL78OWl9mXOdR1UwVNeZmhMTv21iUqLgOj-p2U3s4zagz6yFWNZV6Cm6TP4MJvKT8RSRTIN9_qLEOVPHUcGTgDHsKEAv5DJKzXgQbcyv7w6Cs6qANRK0TJlBjPAJ7sPvXkrqNQIVpfaJ17AgOWPlulghCHGiTjTZOT9T2PEz=s0-d-e1-ft#https://itviec.com/assets/mails/logo-footer-11a1a4f9da6eceebada93c51a35ab4aa76d574bfb58880c5167700cf589a7ea9.png"
                                    class="CToWUd"
                                    data-bit="iit"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
  </table>`;
};

type RejectApplyJobSuccessParams = {
  name: string;
  title: string;
  company: string;
  link: string;
};

export const rejectApplyJobSuccess = ({
  name,
  link,
  title,
  company,
}: RejectApplyJobSuccessParams) => {
  return `
    <table align="center" bgcolor="white" style="width:100%;max-width:580px">
      <tbody>
        <tr id="m_407145487955978427header">
          <td>
            <table style="color:#5b5b5b;line-height:2em;font-size:14px">
              <tbody>
                <tr>
                  <td style="padding-bottom:10px">
                    Hello ${name} ,
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:10px">
                    Your CV has not been approved. It will not be sent for:
                  </td>
                </tr>
                <tr>
                  <td style="padding-left:15px">
                    <ul>
                      <li style="padding-bottom:10px">
                        <a style="text-decoration:none;color:#0267cc;font-size:14px" href="${link}">
                          ${title}
                        </a>
                        <span style="font-size:13px;color:#5c5c5c">at ${company}</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:10px">The following are the top 4 reasons why CVs are frequently rejected:</td>
                </tr>
                <tr>
                  <td style="padding-left:15px;padding-bottom:10px">
                    <ul>
                      <li>No IT degree / qualifications in IT or IT-related fields</li>
                      <li>Little or no IT experience</li>
                      <li>Poorly formatted CV</li>
                      <li>Multiple applicants applied under one account</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:10px">
                    We're happy to review your CV again after 01-12-2023. Please visit ITviec.com again at that time.
                  </td>
                </tr>
                <tr style="color:#5b5b5b">
                  <td style="padding-bottom:10px">
                    Best,<br>The ITviec Team
                  </td>
                </tr>
                <tr>
                  <td style="color:#5b5b5b;font-size:12px">
                    <span>P.S. Do you have questions about our CV review process?</span>
                    <a href="http://im2.itviec.com/ls/click?upn=lvulMGjiThk0vRHw7MZ-2FEa8rTEQbrrAUWmA9oj4sh0mxjCwjEYVwVgTpS1dTKBqMYdQ5_gOuinHFESSTiRMY80JO9VGx5bSYoy-2BEhKpatspP87Y2uLqBbR8OGUEpuiQqQItmTn23QC9gxRZpgEFXo2rIMNnD-2Fzz1xPLhuAnGJzh3GlNEKKTNEJfB0SkBv-2BBNtwVerLe6vO-2Bn2NbZ7asvJQ47MLrOiu4D0T0Nxjuvx1QlG-2FavcGTgX7A7KBTGrMKd64dMemnjpg8h4Vgm6lBHE0iBMko0PvImGP0-2Bn93wXOCkTBu7haZy32ybUkeBIr4iZyMfRWTn7d1kKur2NO4l70hciWLm5XiUKad6u161Zn0j7DR8-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://im2.itviec.com/ls/click?upn%3DlvulMGjiThk0vRHw7MZ-2FEa8rTEQbrrAUWmA9oj4sh0mxjCwjEYVwVgTpS1dTKBqMYdQ5_gOuinHFESSTiRMY80JO9VGx5bSYoy-2BEhKpatspP87Y2uLqBbR8OGUEpuiQqQItmTn23QC9gxRZpgEFXo2rIMNnD-2Fzz1xPLhuAnGJzh3GlNEKKTNEJfB0SkBv-2BBNtwVerLe6vO-2Bn2NbZ7asvJQ47MLrOiu4D0T0Nxjuvx1QlG-2FavcGTgX7A7KBTGrMKd64dMemnjpg8h4Vgm6lBHE0iBMko0PvImGP0-2Bn93wXOCkTBu7haZy32ybUkeBIr4iZyMfRWTn7d1kKur2NO4l70hciWLm5XiUKad6u161Zn0j7DR8-3D&amp;source=gmail&amp;ust=1710154455070000&amp;usg=AOvVaw1Xnb5CSH1BrAz79iQTUYgR">
                      Read our FAQ.
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      <tr>
        <td style="text-align:center;font-size:14px;padding:0 30px 20px;line-height:1.5em">
          <a style="border-bottom:1px dotted #ea2635;text-decoration:none;color:#ea2635" href="${process.env.NEXT_PUBLIC_APP_URL}/it-jobs">Enjoy our new "Developer Chất" series</a>
        </td>
      </tr>
    </tbody>
  </table>`;
};
