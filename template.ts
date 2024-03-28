import { URLSearchParams } from "url"

export async function get<Treturn>(url: string): Promise<Treturn> {
  return await fetch(url).then((res) => res.json())
}

export async function post<
  Treturn,
  Tparams extends readonly [string, string][],
>(url: string, requestParams: Tparams): Promise<Treturn> {
  const params = new URLSearchParams(requestParams)
  return await fetch(url + params.toString()).then((res) => res.json())
}
